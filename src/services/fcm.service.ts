import admin from "firebase-admin";
import { Inject, Service } from "typedi";
import { MessageOptions, MessageType, MessagingService } from "~/types";
import { ActiveUsers, errorHandler } from "~/utils";

var serviceAccount = require("/opt/account.json");

@Service()
export class FCMService implements MessagingService {
  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  @Inject(() => ActiveUsers)
  private activeUsers!: ActiveUsers;

  send = (options: MessageOptions): Promise<void> => {
    const notification = this.buildNotification(options);
    const tokens = this.activeUsers.getActive();

    if (notification && tokens.length > 0) {
      return admin
        .messaging()
        .sendMulticast({
          tokens,
          fcmOptions: {
            analyticsLabel: "anything",
          },
          webpush: {
            fcmOptions: {
              link: "https://shreyas1496.tech",
            },
            notification,
            data: {
              random: "value",
            },
          },
        })
        .then((response) => {
          response.responses.forEach((res, index) => {
            if (
              res.success === false &&
              res.error?.message ===
                "messaging/registration-token-not-registered"
            ) {
              this.activeUsers.removeToken(tokens[index]);
            }
          });
          console.log(response.successCount, response.failureCount);
        })
        .catch(errorHandler("Firebase"));
    }

    return Promise.resolve();
  };

  private buildNotification = (
    options: MessageOptions
  ): admin.messaging.WebpushNotification | null => {
    const { type, body, ma, title } = options;
    if (type === MessageType.MA_CLOSENESS && ma) {
      const { data, duration, isInBucket } = ma;
      return {
        title: `${data.name} @ ${data.ltp}`,
        body: isInBucket
          ? `Trading close to ${duration} DMA line`
          : `Moving away from ${duration} DMA line`,
        requireInteraction: true,
      };
    } else if (!!title) {
      return {
        title,
        body: body ?? type,
        requireInteraction: true,
      };
    } else {
      return null;
    }
  };
}
