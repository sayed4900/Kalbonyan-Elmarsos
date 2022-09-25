import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDeatail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcT2flpNZx086BC6BmM-NlHkukeLeHgtDwKFU-4RX0NNegXJIKV8EGvm7Rlt3sgSlckT"
      title="A First Meetup"
      address="Some City"
      description="This is the first Meetup"
    />
  );
}
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image:
          "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcT2flpNZx086BC6BmM-NlHkukeLeHgtDwKFU-4RX0NNegXJIKV8EGvm7Rlt3sgSlckT",
        id: "m1",
        title: "A First Meetup",
        address: "Some City",
        description: "This is the first Meetup",
      },
    },
  };
}

export default MeetupDetails;
