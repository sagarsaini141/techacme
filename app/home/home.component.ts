import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  eventsCollection!: AngularFirestoreCollection<any>;
  // events = [
  //   {
  //     id: 1,
  //     category: 'Technical',
  //     title: 'Lan Gaming',
  //     pricing:
  //       'Rs 100/- per person for individual event, 300 Rs. Per Team (Max Team Size 4- PubG), 400 Rs. Per Team for group event (Max Team Size 4- Valorant)',
  //   },
  //   {
  //     id: 2,
  //     category: 'Technical',
  //     title: 'Paper Presentation',
  //     pricing: 'Rs 100/- Per Person',
  //   },
  //   {
  //     id: 3,
  //     category: 'Technical',
  //     title: 'Code hunt',
  //     pricing: 'Rs 100/- Per Person',
  //   },
  //   {
  //     id: 4,
  //     category: 'Technical',
  //     title: 'Assemble and Dissemble',
  //     pricing: 'Rs 100/- Per Person',
  //   },
  //   {
  //     id: 5,
  //     category: 'Technical',
  //     title: 'Circuit Desiging',
  //     pricing: 'Rs 300/- per Team (Max size 3)',
  //   },
  //   {
  //     id: 6,
  //     category: 'Technical',
  //     title: 'Lensense and photography workshop cum contest',
  //     pricing: 'Rs 100/- Per Person',
  //   },
  //   {
  //     id: 7,
  //     category: 'Technical',
  //     title: 'Project/Model and Mega structure Competition',
  //     pricing: 'Rs 100/- Per Person',
  //   },
  //   {
  //     id: 8,
  //     category: 'Technical',
  //     title: 'Art of junkies',
  //     pricing: 'Rs 100/- Per Person',
  //   },
  //   {
  //     id: 9,
  //     category: 'Technical',
  //     title:
  //       'Robodino competition(robotics,robo race, line follower, gripper)',
  //     pricing: 'Rs 300/- Team (Max Team size 4)',
  //   },
  //   {
  //     id: 10,
  //     category: 'Mega Events/Games',
  //     title: 'Water rocket Propulsion',
  //     pricing: 'Rs 300/- Per Team (Team Size max 3)',
  //   },
  //   {
  //     id: 11,
  //     category: 'Mega Events/Games',
  //     title:
  //       'Talent Star light(singing, dancing, acting, instrumental, poetry, mime) and band show',
  //     pricing:
  //       'Rs 200/- Per Person, 500/-Rs per Team (Dance Max 5 and Rs 100 per person for above 5 members), Rs 500/- per Team(Bandshow) (Max 5 and Rs 100 per person for above 5 members)',
  //   },
  //   {
  //     id: 12,
  //     category: 'Mega Events/Games',
  //     title: 'Treasure HUnt',
  //     pricing: 'Rs 100/- Per Person',
  //   },
  //   {
  //     id: 13,
  //     category: 'Mega Events/Games',
  //     title: 'Auto Expo',
  //     pricing: '300'
  //   },
  //   {
  //     id: 14,
  //     category: 'Mega Events/Games',
  //     title: 'Fiesta Evening',
  //     pricing: 'Rs 300/- per person',
  //   },

  //   {
  //     id: 15,
  //     category: 'Mega Events/Games',
  //     title: 'Roadies Battle yard and stunt show',
  //     pricing: 'Rs.100/- per person',
  //   },
  //   {
  //     id: 16,
  //     category: 'Mega Events/Games',
  //     title: 'Traditional Fasion Show',
  //     pricing: 'Rs. 300/- per person',
  //   },
  //   {
  //     id: 17,
  //     category: 'Mega Events/Games',
  //     title: '100 Rs Venture',
  //     pricing: 'Rs 500/- per Team (Team Size Max 5)',
  //   },
  //   {
  //     id: 18,
  //     category: 'Cultural',
  //     title: 'Face Painting',
  //     pricing: 'Rs 100/- per person',
  //   },
  //   {
  //     id: 19,
  //     category: 'Cultural',
  //     title: 'Flash mob and nukkad natak',
  //     pricing: '300'
  //   },
  //   {
  //     id: 20,
  //     category: 'Cultural',
  //     title: 'Admad show',
  //     pricing: 'Rs 100/- per person',
  //   },
  //   {
  //     id: 21,
  //     category: 'Cultural',
  //     title: 'Extempore',
  //     pricing: 'Rs 100/- per person',
  //   },
  //   {
  //     id: 22,
  //     category: 'Cultural',
  //     title: 'Mock Parliament',
  //     pricing: 'Rs 100/- per person',
  //   },
  //   {
  //     id: 23,
  //     category: 'Cultural',
  //     title: 'Mega workshop/Lecture Series',
  //     pricing: 'Rs 200/- per person',
  //   },
  //   {
  //     id: 24,
  //     category: 'Sports',
  //     title: 'Volleyball',
  //     pricing: 'Rs 600/- per team (Max 6 members)',
  //   },
  //   {
  //     id: 25,
  //     category: 'Sports',
  //     title: 'Badminton',
  //     pricing: 'Rs 100/- single and Rs 200/- for Doubles',
  //   },
  //   {
  //     id: 26,
  //     category: 'Sports',
  //     title: 'Cricket',
  //     pricing: 'Rs 1100/- per team',
  //   },
  //   {
  //     id: 27,
  //     category: 'Sports',
  //     title: 'Chess',
  //     pricing: 'Rs 100/- per person',
  //   },
  //   {
  //     id: 28,
  //     category: 'Sports',
  //     title: 'Basketball',
  //     pricing: 'Rs 500/- per team',
  //   },
  //   {
  //     id: 29,
  //     category: 'Sports',
  //     title: 'Futsal',
  //     pricing: 'Rs 700/- per team',
  //   },
  //   {
  //     id: 30,
  //     category: 'Sports',
  //     title: 'Kabbadi',
  //     pricing: 'Rs 700/- per team',
  //   },
  // ];

  events = [
    {
      id: 1,
      category: "Technical (LAN Gaming)",
      title: "Mini militia (Mobile Game)",
      pricing: "Rs 100/ - per person",
      img: "https://i.ibb.co/2Zt7wjC/9.png",
      venue: "HP-Lab 1-2 & 108 TB-1,VLSI LAB",
    },
    {
      id: 2,
      category: "Technical (LAN Gaming)",
      title: "PUB-G New State (Mobile Game)",
      pricing: "Rs 100/-person and 300/- per Team",
      img: "https://i.ibb.co/2Zt7wjC/9.png",
      venue: "HP-Lab 1-2 & 108 TB-1,VLSI LAB"
    },
    {
      id: 3,
      category: "Technical (LAN Gaming)",
      title: "Valorant (PC Game)",
      pricing: "Rs 100/-person for individual and 400 Rs. Per Team  (Max Team Size 5)",
      img: "https://i.ibb.co/2Zt7wjC/9.png",
      venue: "HP-Lab 1-2 & 108 TB-1,VLSI LAB"
    },
    {
      id: 4,
      category: "Technical",
      title: "Paper Presentation",
      pricing: "Rs 100/- Per Person",
      img: "https://i.ibb.co/8KXKmQ7/10.png",
      venue: "AU Seminar Hall [11:00-03:00]",
    },
    {
      id: 5,
      category: "Technical",
      title: "Code Hunt",
      pricing: "Rs 100/- Per Person",
      img: "https://i.ibb.co/BycMXPP/11.png",
      venue: "Dell Lab[11:00-03:00]",
    },
    {
      id: 6,
      category: "Technical",
      title: "Assemble and Disassemble",
      pricing: "Rs 100/- Per Person",
      img: "https://i.ibb.co/6g8LVT8/12.png",
      venue: "C-4 & C-7 [11:00-04:00]",
    },
    {
      id: 7,
      category: "Technical",
      title: "Circuit Designing",
      pricing: "Rs 300/- per Team\n(Max size 3)",
      img: "https://i.ibb.co/hBTkzGW/13.png",
      venue: "EC Seminar Hall [11:00-04:00]",
    },
    {
      id: 8,
      category: "Technical",
      title: "Lensense & Photography Workshop cum Contest",
      pricing: "Rs 100/- Per Person",
      img: "https://i.ibb.co/SxL1YBD/14.png",
      venue: "IDEA Lab [11:00-02:00]",
    },
    {
      id: 9,
      category: "Technical",
      title: "Project/Model and Mega Structure Competition",
      pricing: "Rs 100/- Per Person",
      img: "https://i.ibb.co/JFwPYwW/15.png",
      venue: "LT-2 (EX),D1,SAC [11:00-04:00]",
    },
    {
      id: 10,
      category: "Technical",
      title: "Art-Junkies\n(Best out of waste)",
      pricing: "Rs.100/- Per Person",
      img: "https://i.ibb.co/KFqnSGL/16.png",
      venue: "30 (TB-1) [11:00-04:00],day 2",
    },
    {
      id: 11,
      category: "Technical",
      title: "Robodino Competition (Robotics, Robo Race, Line Follower, Gripper)",
      pricing: "Rs 300/- Team (Max Team size 4)",
      img: "https://i.ibb.co/X4WKTyj/17.png",
      venue: "open Area In front of Central Library & R.no 001,002 TB -1 [Dark Room]",
    },
    {
      id: 1,
      category: "Mega Event/Games",
      title: "Water Rocket Propulsion",
      pricing: "Rs 300/- Per Team\n(Team Size max 3)",
      img: "https://i.ibb.co/Pz2RDXt/3.png",
      venue: "OCT Ground [10:00-12:00],Day 3",
    },
    {
      id: 2,
      category: "Mega Event/Games (Talent Star Light)",
      title: "Singing",
      pricing: "Rs 200/- Per Person\n",
      img: "https://i.ibb.co/Tgqc4Xm/4.png",
      venue: "Day 1-AUDI {TSL}[11:00-03:00], Day 2-AUDI {TSL}[11:00-03:00]",
    },
    {
      id: 3,
      category: "Mega Event/Games (Talent Star Light)",
      title: "Dancing",
      pricing: "Rs 200/- Per Person, 500/-Rs per Team Max 5 and Rs 100 per person for above 5 members",
      img: "https://i.ibb.co/Tgqc4Xm/4.png",
      venue: "Day 1-AUDI {TSL}[11:00-03:00], Day 2-AUDI {TSL}[11:00-03:00]",
    },
    {
      id: 4,
      category: "Mega Event/Games (Talent Star Light)",
      title: "Instrumental",
      pricing: "Rs 200/- Per Person and Rs 500/- per Team",
      img: "https://i.ibb.co/Tgqc4Xm/4.png",
      venue: "Day 1-AUDI {TSL}[11:00-03:00], Day 2-AUDI {TSL}[11:00-03:00]",
    },
    {
      id: 5,
      category: "Mega Event/Games (Talent Star Light)",
      title: "Poetry",
      pricing: "Rs 200/- Per Person",
      img: "https://i.ibb.co/Tgqc4Xm/4.png",
      venue: "Day 1-AUDI {TSL}[11:00-03:00], Day 2-AUDI {TSL}[11:00-03:00]",
    },
    {
      id: 6,
      category: "Mega Event/Games (Talent Star Light)",
      title: "Mime",
      pricing: "Rs 200/- Per Person",
      img: "https://i.ibb.co/Tgqc4Xm/4.png",
      venue: "Day 1-AUDI {TSL}[11:00-03:00], Day 2-AUDI {TSL}[11:00-03:00]",
    },
    {
      id: 7,
      category: "Mega Event/Games (Talent Star Light)",
      title: "Band Show",
      pricing: "Rs 200/- Per Person and Rs 500/- per Team(Bandshow)- (Max 5 and Rs 100 per person for above 5 members)",
      img: "https://i.ibb.co/KjSdzJ8/23.png",
      venue: "AUDI{TSL}[11:00-03:00],Day 2",
    },
    {
      id: 8,
      category: "(Mega Event/Games)",
      title: "Treasure Hunt",
      pricing: "Rs 100/- per person",
      img: "https://i.ibb.co/mBrWgQ6/5.png",
      venue: "abc",
    },
    {
      id: 10,
      category: "(Mega Event/Games)",
      title: "Fiesta Evening",
      pricing: "Rs 300/- per person",
      img: "sad",
      venue: "OCT GROUND [06:00-10:00]",
    },
    {
      id: 11,
      category: "(Mega Event/Games)",
      title: "Roadies Battle Yard & Stunt Show",
      pricing: "Rs.100/- per person",
      img: "https://i.ibb.co/YW5mj6Q/6.png",
      venue: "Day1-LT-1 & OCT Ground/Road [12:00-04:00] ,Day2-OCT Road[12:00-04:00]",
    },
    {
      id: 12,
      category: "(Mega Event/Games)",
      title: "Traditional Fashion Show",
      pricing: "Rs. 300/- per person",
      img: "https://i.ibb.co/Xjyp936/7.png",
      venue: "Day1-AUDI [03:00-06:00] ,Day2-OCT Ground [04:00-06:00] ",
      
    },
    {
      id: 13,
      category: "(Mega Event/Games)",
      title: "100 Rs Venture",
      pricing: "Rs 500/- per Team (Team Size Max 5)",
      img: "https://i.ibb.co/8D0byJ9/8.png",
      venue: "IDEA Lab and Nearby area[11:00-05:00]",
    },
    {
      id: 1,
      category: "Sports Event",
      title: "Volleyball",
      pricing: "Rs 600/- per team(Max 6 members)",
      img: "https://i.ibb.co/zfTf6dL/24.png",
      venue: "1st ,3rd and 5th April Volleyball Court",
    },
    {
      id: 2,
      category: "Sports Event",
      title: "Badminton",
      pricing: "Rs 100/- single and Rs 200/- for Doubles",
      img: "https://i.ibb.co/0Fbb7YK/27.png",
      venue: "1st ,3rd and 5th April Badminton Court Near Boys Hostel",
    },
    {
      id: 3,
      category: "Sports Event",
      title: "Cricket",
      pricing: "Rs 1100/- per team",
      img: "https://i.ibb.co/nn82mgV/30.png",
      venue: "27-29 &31 March, 01,03,05 April [7:00-11:00 AM & 3:00-7:00 PM]",
    },
    {
      id: 4,
      category: "Sports Event",
      title: "Chess",
      pricing: "Rs 100/- per person",
      img: "https://i.ibb.co/sQ24YwD/26.png",
      venue: "5th April [108]TB-1",
    },
    {
      id: 5,
      category: "Sports Event",
      title: "Basket ball",
      pricing: "Rs 500/- per team",
      img: "https://i.ibb.co/bLXjDvM/29.png",
      venue: "3rd & 5th Basket ball ground",
    },
    {
      id: 6,
      category: "Sports Event",
      title: "Futsal",
      pricing: "Rs 700/- per team",
      img: "https://i.ibb.co/wW8v9yM/25.png",
      venue: "3rd & 5th School Ground",
    },
    {
      id: 7,
      category: "Sports Event",
      title: "Kabbadi",
      pricing: "Rs 700/- per team",
      img: "https://i.ibb.co/ZKGzZFN/28.png",
      venue: "3rd & 5th Oct Ground",
    },
    {
      id: 1,
      category: "Cultural",
      title: "Face Painting",
      pricing: "Rs 100/- per person",
      img: "https://i.ibb.co/CMSkdZb/18.png",
      venue: "BS Foyer [11:00-03:00]",
    },
    {
      id: 4,
      category: "Cultural",
      title: "Admad Show",
      pricing: "Rs 100/- per person",
      img: "https://i.ibb.co/r2W9Lrm/19.png",
      venue: "CE Seminar Hall[11:00-03:00]",
    },
    {
      id: 5,
      category: "Cultural",
      title: "Extempore",
      pricing: "Rs 100 Per Person",
      img: "https://i.ibb.co/PWwLGQL/20.png",
      venue: "CE Seminar Hall[11:00-03:00],Day-2",
    },
    {
      id: 6,
      category: "Cultural",
      title: "Mock Parliament",
      pricing: "Rs.100 Per Person",
      img: "https://i.ibb.co/tcpGxvr/21.png",
      venue: "OCM Seminar Hall [11:00-04:00],Day-2",
    },
    {
      id: 7,
      category: "Cultural",
      title: "Mega Workshop/Lecture Series",
      pricing: "Rs 200/- per person",
      img:"https://i.ibb.co/qRx2Ty9/22.png",
      venue:"AUDI[10:00-12:00],Day 3"
    }
  ]
  
  constructor(private db: AngularFirestore) {}

  ngOnInit(): void {
    // this.addEvents() 
  }
  addEvents() {
    this.events.forEach((event) => {
        this.db.collection('events').add({
          id:event.id,
          category: event.category,
          title: event.title,
          pricing: event.pricing,
          img:event.img,
          venue: event.venue
        })
        .then(() => {
          console.log("Document updated successfully");
        })
        .catch(error => {
          console.error("Error updating document: ", error);
        });
      });
  }
}
