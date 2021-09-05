import { MessageType, MessagingService, TableRow } from "~/types";
import admin from "firebase-admin";
import { Inject, Service } from "typedi";
import { ActiveUsers } from "~/utils";

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

  send = (
    name: string,
    type: MessageType,
    data?: TableRow | undefined
  ): Promise<void> => {
    console.log(data);

    return admin
      .messaging()
      .sendMulticast({
        tokens: this.activeUsers.getActive(),
        fcmOptions: {
          analyticsLabel: "anything",
        },
        notification: {
          title: "hawa hawai",
          body: "ab tak 56",
        },
        webpush: {
          fcmOptions: {
            link: "https://shreyas1496.tech",
          },
          notification: {
            title: name,
            body: type,
            requireInteraction: true,
          },
          data: {
            random: "value",
          },
        },
      })
      .then((response) => {
        console.log(JSON.stringify(response));
      });
  };
}
