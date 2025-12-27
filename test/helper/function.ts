export function getRandomNumber(min: number, max: number): number {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function timeStamp(): number {
   return Math.floor(Date.now() / 1000);
}

export function getDateNow(): {
   date: number;
   day: string;
   month: string;
} {
   const now = new Date();

   const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

   const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
   ];

   return {
      date: now.getDate(),
      day: days[now.getDay()],
      month: months[now.getMonth()]
   };
}

export function getRandomText(min: number, max: number): string {
   const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

   const length = Math.floor(Math.random() * (max - min + 1)) + min;
   let result = "";

   for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
   }

   return result;
}

export function truncateText(text: string, maxLength: number): string {
   return text.length > maxLength ? text.slice(0, maxLength) : text;
}
