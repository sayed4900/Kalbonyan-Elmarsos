import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcT2flpNZx086BC6BmM-NlHkukeLeHgtDwKFU-4RX0NNegXJIKV8EGvm7Rlt3sgSlckT",
    address: "NewYork 5, 12345 St, USA",
    description: "This is the first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/28/Jersey_City_Skyline_sunset.jpg",
    address: "Jersey City 5, 12345 St, USA",
    description: "This is the second meetup",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

export default HomePage;
