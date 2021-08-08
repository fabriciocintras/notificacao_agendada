import PushNotification from "react-native-push-notification"

  class NotificationManager {
    definirNavegador(novoNavegador){
      navegador = novoNavegador
    }



    criarCanal = () =>{
        PushNotification.createChannel(
            {
              channelId: "channel-id",
              channelName: "My channel",
              channelDescription: "A channel to categorise your notifications",
              playSound: false,
              soundName: "default", 
              vibrate: true, 
            },
            (created) => console.log(`createChannel returned '${created}'`) 
          );

    }





      configurar = () => {
          PushNotification.configure({
              onRegister: function (token) {
                  console.log("[NotificationManager] onRegister token:", token);
                },
              onNotification: function (notification) {
              console.log("[NotificationManager] onNotification:", notification);
              console.log("Ofertas")
              navegador.navigate("Ofertas"+notification.id)
              
              },
          })
      }




    
      criarNotificacao = (id, title, message, data = {}, options = {}) => {
          return {
              id: id,
              autoCancel: true,
              channelId: "channel-id",
              largeIcon: options.largeIcon || "ic_launcher",
              smallIcon: options.smallIcon || "ic_launcher",
              bigText: message || '',
              subText: title || '',
              vibrate: options.vibrate || false,
              vibration: options.vibration || 300,
              priority: options.priority || "high",
              importance: options.importance || "high",
              data: data,
              actions:['yes','no']      
          }
      }





      exibirNotificacao = (id, title, message, data = {}, options = {}) => {
          PushNotification.localNotification({
              ...this.criarNotificacao(id, title, message, data, options),

              
              title: title || "",
              message: message || "",
              playSound: options.playSound || false,
              soundName: options.soundName || 'default',
              userInteraction: false
          })
      }





      
      cancelar = () => {
          PushNotification.cancelAllLocalNotifications();
      }





      agendarNotificacao(){
       
        PushNotification.localNotificationSchedule({
            id:0,
            channelId: "channel-id",
            repeatTime: 7 * 1000, 
            title:'Fabricio Cintras',
            message: "Ei!! estava aguardando cupons, disponibilizamos alguns para você xD", 
            date: new Date(Date.now() + 7 * 1000), 
            allowWhileIdle: false, 
        });
        PushNotification.localNotificationSchedule({
            id:1,
            channelId: "channel-id",
            repeatTime: 9 * 1000,
            title:'Fabricio Cintras',
            message: "A proxima horario para sua refeição esta muuuuito proximo!! acesse o App e veja o que temos para hoje hehe",
            date: new Date(Date.now() + 9 * 1000),
            allowWhileIdle: false,
        });
        PushNotification.localNotificationSchedule({
            id:2,
            channelId: "channel-id",
            repeatTime: 5 * 1000, 
            title:'Fabricio Cintras',
            message: "Ofertas disponiveis so Hoooooojeeee! Corra kk",
            date: new Date(Date.now() + 5 * 1000), 
            allowWhileIdle: false,
        });
       
      }





  }

  export const notificationManager = new NotificationManager();