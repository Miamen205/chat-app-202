import moment from 'moment';

moment().format("YYYY, MMMM, dddd")

function BBB4days(props) {
  return [
    {
      title: 'Deadlift',
      allDay: true,
      start: moment().weekday(props.day1),
      end: moment().weekday(props.day1),
      desc: "Weight/Reps: " + props.deadliftW1D0 + ", " + props.deadliftW1D1 + ", " + props.deadliftW1D2
    },
    {
      title: 'DeadLift Repeated',
      allDay: true,
      start: moment().weekday(props.day1),
      end: moment().weekday(props.day1),
      desc: "Sets/Reps: 5 x 10"
    },
    {
      title: 'Accessory',
      allDay: true,
      start: moment().weekday(props.day1),
      end: moment().weekday(props.day1),
      desc: "5x"
    },
    {
      title: 'Bench Press',
      allDay: true,
      start: moment().weekday(props.day2),
      end: moment().weekday(props.day2),
      desc: "Weight/Reps: " + props.benchW1D0 + ", " + props.benchW1D1 + ", " + props.benchW1D2
    },
    {
      title: 'Bench Press Repeated',
      allDay: true,
      start: moment().weekday(props.day2),
      end: moment().weekday(props.day2),
      desc: "Sets/Reps: 5 x 10"
    },
    {
      title: 'Accessory',
      allDay: true,
      start: moment().weekday(props.day2),
      end: moment().weekday(props.day2),
      desc: "5x"
    },
    {
      title: 'Squat',
      allDay: true,
      start: moment().weekday(props.day3),
      end: moment().weekday(props.day3),
      desc: "Weight/Reps: " + props.squatW1D0 + ", " + props.squatW1D1 + ", " + props.squatW1D2
    },
    {
      title: 'Squat Repeated',
      allDay: true,
      start: moment().weekday(props.day3),
      end: moment().weekday(props.day3),
      desc: "Sets/Reps: 5 x 10"
    },
    {
      title: 'Accessory',
      allDay: true,
      start: moment().weekday(props.day3),
      end: moment().weekday(props.day3),
      desc: "5x"
    },
    {
      title: 'Overhead Press',
      allDay: true,
      start: moment().weekday(props.day4),
      end: moment().weekday(props.day4),
      desc: "Weight/Reps: " + props.ohpW1D0 + ", " + props.ohpW1D1 + ", " + props.ohpW1D2
    },
    {
      title: 'Overhead Press Repeated',
      allDay: true,
      start: moment().weekday(props.day4),
      end: moment().weekday(props.day4),
      desc: "Sets/Reps: 5 x 10"
    },
    {
      title: 'Accessory',
      allDay: true,
      start: moment().weekday(props.day4),
      end: moment().weekday(props.day4),
      desc: "5x"
    },
    {
      title: 'Deadlift',
      allDay: true,
      start: moment().weekday(props.day1 + 7),
      end: moment().weekday(props.day1 + 7),
      desc: "Weight/Reps: " + props.deadliftW2D0 + ", " + props.deadliftW2D1 + ", " + props.deadliftW2D2
    },
    {
      title: 'DeadLift Repeated',
      allDay: true,
      start: moment().weekday(props.day1 + 7),
      end: moment().weekday(props.day1 + 7),
      desc: "Sets/Reps: 5 x 10"
    },
    {
      title: 'Accessory',
      allDay: true,
      start: moment().weekday(props.day1 + 7),
      end: moment().weekday(props.day1 + 7),
      desc: "5x"
    },
    {
      title: 'Bench Press',
      allDay: true,
      start: moment().weekday(props.day2 + 7),
      end: moment().weekday(props.day2 + 7),
      desc: "Weight/Reps: " + props.benchW2D0 + ", " + props.benchW2D1 + ", " + props.benchW2D2
    },
    {
      title: 'Bench Press Repeated',
      allDay: true,
      start: moment().weekday(props.day2 + 7),
      end: moment().weekday(props.day2 + 7),
      desc: "Sets/Reps: 5 x 10"
    },
    {
      title: 'Accessory',
      allDay: true,
      start: moment().weekday(props.day2 + 7),
      end: moment().weekday(props.day2 + 7),
      desc: "5x"
    },
    {
      title: 'Squat',
      allDay: true,
      start: moment().weekday(props.day3 + 7),
      end: moment().weekday(props.day3 + 7),
      desc: "Weight/Reps: " + props.squatW2D0 + ", " + props.squatW2D1 + ", " + props.squatW2D2
    },
    {
      title: 'Squat Repeated',
      allDay: true,
      start: moment().weekday(props.day3 + 7),
      end: moment().weekday(props.day3 + 7),
      desc: "Sets/Reps: 5 x 10"
    },
    {
      title: 'Accessory',
      allDay: true,
      start: moment().weekday(props.day3 + 7),
      end: moment().weekday(props.day3 + 7),
      desc: "5x"
    },
    {
      title: 'Overhead Press',
      allDay: true,
      start: moment().weekday(props.day4 + 7),
      end: moment().weekday(props.day4 + 7),
      desc: "Weight/Reps: " + props.ohpW2D0 + ", " + props.ohpW2D1 + ", " + props.ohpW2D2
    },
    {
      title: 'Overhead Press Repeated',
      allDay: true,
      start: moment().weekday(props.day4 + 7),
      end: moment().weekday(props.day4 + 7),
      desc: "Sets/Reps: 5 x 10"
    },
    {
      title: 'Accessory',
      allDay: true,
      start: moment().weekday(props.day4 + 7),
      end: moment().weekday(props.day4 + 7),
      desc: "5x"
    },
    {
      title: 'Deadlift',
      allDay: true,
      start: moment().weekday(props.day1 + 14),
      end: moment().weekday(props.day1 + 14),
      desc: "Weight/Reps: " + props.deadliftW3D0 + ", " + props.deadliftW3D1 + ", " + props.deadliftW3D2
    },
    {
      title: 'DeadLift Repeated',
      allDay: true,
      start: moment().weekday(props.day1 + 14),
      end: moment().weekday(props.day1 + 14),
      desc: "Sets/Reps: 5 x 10"
    },
    {
      title: 'Accessory',
      allDay: true,
      start: moment().weekday(props.day1 + 14),
      end: moment().weekday(props.day1 + 14),
      desc: "5x"
    },
    {
      title: 'Bench Press',
      allDay: true,
      start: moment().weekday(props.day2 + 14),
      end: moment().weekday(props.day2 + 14),
      desc: "Weight/Reps: " + props.benchW3D0 + ", " + props.benchW3D1 + ", " + props.benchW3D2
    },
    {
      title: 'Bench Press Repeated',
      allDay: true,
      start: moment().weekday(props.day2 + 14),
      end: moment().weekday(props.day2 + 14),
      desc: "Sets/Reps: 5 x 10"
    },
    {
      title: 'Accessory',
      allDay: true,
      start: moment().weekday(props.day2 + 14),
      end: moment().weekday(props.day2 + 14),
      desc: "5x"
    },
    {
      title: 'Squat',
      allDay: true,
      start: moment().weekday(props.day3 + 14),
      end: moment().weekday(props.day3 + 14),
      desc: "Weight/Reps: " + props.squatW3D0 + ", " + props.squatW3D1 + ", " + props.squatW3D2
    },
    {
      title: 'Squat Repeated',
      allDay: true,
      start: moment().weekday(props.day3 + 14),
      end: moment().weekday(props.day3 + 14),
      desc: "Sets/Reps: 5 x 10"
    },
    {
      title: 'Accessory',
      allDay: true,
      start: moment().weekday(props.day3 + 14),
      end: moment().weekday(props.day3 + 14),
      desc: "5x"
    },
    {
      title: 'Overhead Press',
      allDay: true,
      start: moment().weekday(props.day4 + 14),
      end: moment().weekday(props.day4 + 14),
      desc: "Weight/Reps: " + props.ohpW3D0 + ", " + props.ohpW3D1 + ", " + props.ohpW3D2
    },
    {
      title: 'Overhead Press Repeated',
      allDay: true,
      start: moment().weekday(props.day4 + 14),
      end: moment().weekday(props.day4 + 14),
      desc: "Sets/Reps: 5 x 10"
    },
    {
      title: 'Accessory',
      allDay: true,
      start: moment().weekday(props.day4 + 14),
      end: moment().weekday(props.day4 + 14),
      desc: "5x"
    },
    {
      title: 'Deadlift',
      allDay: true,
      start: moment().weekday(props.day1 + 21),
      end: moment().weekday(props.day1 + 21),
      desc: "Weight/Reps: " + props.deadliftW4D0 + ", " + props.deadliftW4D1 + ", " + props.deadliftW4D2
    },
    {
      title: 'DeadLift Repeated',
      allDay: true,
      start: moment().weekday(props.day1 + 21),
      end: moment().weekday(props.day1 + 21),
      desc: "Sets/Reps: 5 x 10"
    },
    {
      title: 'Accessory',
      allDay: true,
      start: moment().weekday(props.day1 + 21),
      end: moment().weekday(props.day1 + 21),
      desc: "5x"
    },
    {
      title: 'Bench Press',
      allDay: true,
      start: moment().weekday(props.day2 + 21),
      end: moment().weekday(props.day2 + 21),
      desc: "Weight/Reps: " + props.benchW4D0 + ", " + props.benchW4D1 + ", " + props.benchW4D2
    },
    {
      title: 'Bench Press Repeated',
      allDay: true,
      start: moment().weekday(props.day2 + 21),
      end: moment().weekday(props.day2 + 21),
      desc: "Sets/Reps: 5 x 10"
    },
    {
      title: 'Accessory',
      allDay: true,
      start: moment().weekday(props.day2 + 21),
      end: moment().weekday(props.day2 + 21),
      desc: "Do Work"
    },
    {
      title: 'Squat',
      allDay: true,
      start: moment().weekday(props.day3 + 21),
      end: moment().weekday(props.day3 + 21),
      desc: "Weight/Reps: " + props.squatW4D0 + ", " + props.squatW4D1 + ", " + props.squatW4D2
    },
    {
      title: 'Squat Repeated',
      allDay: true,
      start: moment().weekday(props.day3 + 21),
      end: moment().weekday(props.day3 + 21),
      desc: "Sets/Reps: 5 x 10"
    },
    {
      title: 'Accessory',
      allDay: true,
      start: moment().weekday(props.day3 + 21),
      end: moment().weekday(props.day3 + 21),
      desc: "5x"
    },
    {
      title: 'Overhead Press',
      allDay: true,
      start: moment().weekday(props.day4 + 21),
      end: moment().weekday(props.day4 + 21),
      desc: "Weight/Reps: " + props.ohpW4D0 + ", " + props.ohpW4D1 + ", " + props.ohpW4D2
    },
    {
      title: 'Overhead Press Repeated',
      allDay: true,
      start: moment().weekday(props.day4 + 21),
      end: moment().weekday(props.day4 + 21),
      desc: "Sets/Reps: 5 x 10"
    },
    {
      title: 'Accessory',
      allDay: true,
      start: moment().weekday(props.day4 + 21),
      end: moment().weekday(props.day4 + 21),
      desc: "5x"
    }
  ];
}

function BBB3days(props){
  return [
    //-------------------------------------------Week 1------------------------------->
    {
      title: 'DeadLift',
      allDay: true,
      start: moment().weekday(props.day1),
      end: moment().weekday(props.day1),
      desc: "Weight/Reps: " + props.deadliftW1D0 + ", " + props.deadliftW1D1 + ", " + props.deadliftW1D2
    },
    {
      title: 'Deadlift Repeated',
      allDay: true,
      start: moment().weekday(props.day1),
      end: moment().weekday(props.day1),
      desc: "Weight/Reps: " + props.deadliftW1D0 + ", " + props.deadliftW1D1 + ", " + props.deadliftW1D2
    },
    {
      title: '3x5',
      allDay: true,
      start: moment().weekday(props.day1),
      end: moment().weekday(props.day1),
      desc: "Do Work"
    },
    {
      title: 'Overhead Press',
      allDay: true,
      start: moment().weekday(props.day2),
      end: moment().weekday(props.day2),
      desc: "Weight/Reps: " + props.ohpW1D0 + ", " + props.ohpW1D1 + ", " + props.ohpW1D2
    },
    {
      title: 'Overhead Press Repeated',
      allDay: true,
      start: moment().weekday(props.day2),
      end: moment().weekday(props.day2),
      desc: "Weight/Reps: " + props.ohpW1D0 + ", " + props.ohpW1D1 + ", " + props.ohpW1D2
    },
    {
      title: '3x5',
      allDay: true,
      start: moment().weekday(props.day2),
      end: moment().weekday(props.day2),
      desc: "Do Work"
    },
    {
      title: 'Squat',
      allDay: true,
      start: moment().weekday(props.day3),
      end: moment().weekday(props.day3),
      desc: "Weight/Reps: " + props.squatW1D0 + ", " + props.squatW1D1 + ", " + props.squatW1D2
    },
    {
      title: 'Squat Repeated',
      allDay: true,
      start: moment().weekday(props.day3),
      end: moment().weekday(props.day3),
      desc: "Weight/Reps: " + props.squatW1D0 + ", " + props.squatW1D1 + ", " + props.squatW1D2
    },
    {
      title: '3x5',
      allDay: true,
      start: moment().weekday(props.day3),
      end: moment().weekday(props.day3),
      desc: "Do Work"
    },
    {
      title: 'Bench',
      allDay: true,
      start: moment().weekday(props.day1 + 7),
      end: moment().weekday(props.day1 + 7),
      desc: "Weight/Reps: " + props.deadliftW1D0 + ", " + props.deadliftW1D1 + ", " + props.deadliftW1D2
    },
    {
      title: 'Bench Repeated',
      allDay: true,
      start: moment().weekday(props.day1 + 7),
      end: moment().weekday(props.day1 + 7),
      desc: "Weight/Reps: " + props.deadliftW1D0 + ", " + props.deadliftW1D1 + ", " + props.deadliftW1D2
    },
    {
      title: '3x5',
      allDay: true,
      start: moment().weekday(props.day1 + 7),
      end: moment().weekday(props.day1 + 7),
      desc: "Do Work"
    },
    //------------------------------------------------------Week2-------------------------------------->
    {
      title: 'DeadLift',
      allDay: true,
      start: moment().weekday(props.day2 + 7),
      end: moment().weekday(props.day2 + 7),
      desc: "Weight/Reps: " + props.deadliftW2D0 + ", " + props.deadliftW2D1 + ", " + props.deadliftW2D2
    },
    {
      title: 'Deadlift Repeated',
      allDay: true,
      start: moment().weekday(props.day2 + 7),
      end: moment().weekday(props.day2 + 7),
      desc: "Weight/Reps: " + props.deadliftW2D0 + ", " + props.deadliftW2D1 + ", " + props.deadliftW2D2
    },
    {
      title: '3x5',
      allDay: true,
      start: moment().weekday(props.day2 + 7),
      end: moment().weekday(props.day2 + 7),
      desc: "Do Work"
    },
    {
      title: 'Overhead Press',
      allDay: true,
      start: moment().weekday(props.day3 + 7),
      end: moment().weekday(props.day3 + 7),
      desc: "Weight/Reps: " + props.ohpW2D0 + ", " + props.ohpW2D1 + ", " + props.ohpW2D2
    },
    {
      title: 'Overhead Press Repeated',
      allDay: true,
      start: moment().weekday(props.day3 + 7),
      end: moment().weekday(props.day3 + 7),
      desc: "Weight/Reps: " + props.ohpW2D0 + ", " + props.ohpW2D1 + ", " + props.ohpW2D2
    },
    {
      title: '3x5',
      allDay: true,
      start: moment().weekday(props.day3 + 7),
      end: moment().weekday(props.day3 + 7),
      desc: "Do Work"
    },
    {
      title: 'Squat',
      allDay: true,
      start: moment().weekday(props.day1 + 14),
      end: moment().weekday(props.day1 + 14),
      desc: "Weight/Reps: " + props.squatW2D0 + ", " + props.squatW2D1 + ", " + props.squatW2D2
    },
    {
      title: 'Squat Repeated',
      allDay: true,
      start: moment().weekday(props.day1 + 14),
      end: moment().weekday(props.day1 + 14),
      desc: "Weight/Reps: " + props.squatW1D0 + ", " + props.squatW1D1 + ", " + props.squatW1D2
    },
    {
      title: '3x5',
      allDay: true,
      start: moment().weekday(props.day1 + 14),
      end: moment().weekday(props.day1 + 14),
      desc: "Do Work"
    },
    //------------------------------------------------------------Week 3----------------------------------------->
    {
      title: 'Bench',
      allDay: true,
      start: moment().weekday(props.day2 + 14),
      end: moment().weekday(props.day2 + 14),
      desc: "Weight/Reps: " + props.squatW3D0 + ", " + props.squatW3D1 + ", " + props.squatW3D2
    },
    {
      title: 'Bench Repeated',
      allDay: true,
      start: moment().weekday(props.day2 + 14),
      end: moment().weekday(props.day2 + 14),
      desc: "Weight/Reps: " + props.squatW3D0 + ", " + props.squatW3D1 + ", " + props.squatW3D2
    },
    {
      title: '3x5',
      allDay: true,
      start: moment().weekday(props.day2 + 14),
      end: moment().weekday(props.day2 + 14),
      desc: "Do Work"
    },
    {
      title: 'Deadlift',
      allDay: true,
      start: moment().weekday(props.day3 + 14),
      end: moment().weekday(props.day3 + 14),
      desc: "Weight/Reps: " + props.deadliftW3D0 + ", " + props.deadliftW3D1 + ", " + props.deadliftW3D2
    },
    {
      title: 'Deadlift Repeated',
      allDay: true,
      start: moment().weekday(props.day3 + 14),
      end: moment().weekday(props.day3 + 14),
      desc: "Weight/Reps: " + props.deadliftW3D0 + ", " + props.deadliftW3D1 + ", " + props.deadliftW3D2
    },
    {
      title: '3x5',
      allDay: true,
      start: moment().weekday(props.day3 + 14),
      end: moment().weekday(props.day3 + 14),
      desc: "Do Work"
    },
    {
      title: 'Overhead Press',
      allDay: true,
      start: moment().weekday(props.day1 + 21),
      end: moment().weekday(props.day1 + 21),
      desc: "Weight/Reps: " + props.squatW3D0 + ", " + props.squatW3D1 + ", " + props.squatW3D2
    },
    {
      title: 'Overhead Press Repeated',
      allDay: true,
      start: moment().weekday(props.day1 + 21),
      end: moment().weekday(props.day1 + 21),
      desc: "Weight/Reps: " + props.squatW3D0 + ", " + props.squatW3D1 + ", " + props.squatW3D2
    },
    {
      title: '3x5',
      allDay: true,
      start: moment().weekday(props.day1 + 21),
      end: moment().weekday(props.day1 + 21),
      desc: "Do Work"
    },
    //------------------------------------------------------------------Week 4----------------------------------->
    {
      title: 'Squat',
      allDay: true,
      start: moment().weekday(props.day2 + 21),
      end: moment().weekday(props.day2 + 21),
      desc: "Weight/Reps: " + props.squatW4D0 + ", " + props.squatW4D1 + ", " + props.squatW4D2
    },
    {
      title: 'Squat Repeated',
      allDay: true,
      start: moment().weekday(props.day2 + 21),
      end: moment().weekday(props.day2 + 21),
      desc: "Weight/Reps: " + props.squatW4D0 + ", " + props.squatW4D1 + ", " + props.squatW4D2
    },
    {
      title: '3x5',
      allDay: true,
      start: moment().weekday(props.day2 + 21),
      end: moment().weekday(props.day2 + 21),
      desc: "Do Work"
    },
    {
      title: 'Bench',
      allDay: true,
      start: moment().weekday(props.day3 + 21),
      end: moment().weekday(props.day3 + 21),
      desc: "Weight/Reps: " + props.squatW4D0 + ", " + props.squatW4D1 + ", " + props.squatW4D2
    },
    {
      title: 'Bench Repeated',
      allDay: true,
      start: moment().weekday(props.day3 + 21),
      end: moment().weekday(props.day3 + 21),
      desc: "Weight/Reps: " + props.squatW4D0 + ", " + props.squatW4D1 + ", " + props.squatW4D2
    },
    {
      title: '3x5',
      allDay: true,
      start: moment().weekday(props.day3 + 21),
      end: moment().weekday(props.day3 + 21),
      desc: "Do Work"
    },
    {
      title: 'DeadLift',
      allDay: true,
      start: moment().weekday(props.day1 + 28),
      end: moment().weekday(props.day1 + 28),
      desc: "Weight/Reps: " + props.deadliftW4D0 + ", " + props.deadliftW4D1 + ", " + props.deadliftW4D2
    },
    {
      title: 'Deadlift Repeated',
      allDay: true,
      start: moment().weekday(props.day1 + 28),
      end: moment().weekday(props.day1 + 28),
      desc: "Weight/Reps: " + props.deadliftW4D0 + ", " + props.deadliftW4D1 + ", " + props.deadliftW4D2
    },
    {
      title: '3x5',
      allDay: true,
      start: moment().weekday(props.day1 + 28),
      end: moment().weekday(props.day1 + 28),
      desc: "Do Work"
    },
    //----------------------------------------------------------------Week 5-------------------------------------->
    {
      title: 'Overhead Press',
      allDay: true,
      start: moment().weekday(props.day2 + 28),
      end: moment().weekday(props.day2 + 28),
      desc: "Weight/Reps: " + props.ohpW4D0 + ", " + props.ohpW4D1 + ", " + props.ohpW4D2
    },
    {
      title: 'Overhead Press Repeated',
      allDay: true,
      start: moment().weekday(props.day2 + 28),
      end: moment().weekday(props.day2 + 28),
      desc: "Weight/Reps: " + props.ohpW4D0 + ", " + props.ohpW4D1 + ", " + props.ohpW4D2
    },
    {
      title: '3x5',
      allDay: true,
      start: moment().weekday(props.day2 + 28),
      end: moment().weekday(props.day2 + 28),
      desc: "Do Work"
    },
    {
      title: 'Squat',
      allDay: true,
      start: moment().weekday(props.day3 + 28),
      end: moment().weekday(props.day3 + 28),
      desc: "Weight/Reps: " + props.squatW4D0 + ", " + props.squatW4D1 + ", " + props.squatW4D2
    },
    {
      title: 'Squat Repeated',
      allDay: true,
      start: moment().weekday(props.day3 + 28),
      end: moment().weekday(props.day3 + 28),
      desc: "Weight/Reps: " + props.squatW4D0 + ", " + props.squatW4D1 + ", " + props.squatW4D2
    },
    {
      title: '3x5',
      allDay: true,
      start: moment().weekday(props.day3 + 28),
      end: moment().weekday(props.day3 + 28),
      desc: "Do Work"
    },
    {
      title: 'Bench',
      allDay: true,
      start: moment().weekday(props.day1 + 35),
      end: moment().weekday(props.day1 + 35),
      desc: "Weight/Reps: " + props.squatW4D0 + ", " + props.squatW4D1 + ", " + props.squatW4D2
    },
    {
      title: 'Bench Repeated',
      allDay: true,
      start: moment().weekday(props.day1 + 35),
      end: moment().weekday(props.day1 + 35),
      desc: "Weight/Reps: " + props.squatW4D0 + ", " + props.squatW4D1 + ", " + props.squatW4D2
    },
    {
      title: '3x5',
      allDay: true,
      start: moment().weekday(props.day1 + 35),
      end: moment().weekday(props.day1 + 35),
      desc: "Do Work"
    },
  ];
}

function BBB2days(props){
  return[
  {
    title: 'Squat',
    allDay: true,
    start: moment().weekday(props.day1),
    end: moment().weekday(props.day1),
    desc: "Weight/Reps: " + props.squatW1D0 + ", " + props.squatW1D1 + ", " + props.squatW1D2
  },
  {
    title: 'Bench',
    allDay: true,
    start: moment().weekday(props.day1),
    end: moment().weekday(props.day1),
    desc: "Weight/Reps: " + props.squatW1D0 + ", " + props.squatW1D1 + ", " + props.squatW1D2
  },
  {
    title: 'Accessory',
    allDay: true,
    start: moment().weekday(props.day1),
    end: moment().weekday(props.day1),
    desc: 'Chin-ups: 3 sets of 10, Back Raises: 3 sets of 15, Dumbbell Bench Press: 3 sets of 10, Rear Laterals: 3 sets of 20'
  },
  {
    title: 'Accessory (optional)',
    allDay: true,
    start: moment().weekday(props.day1),
    end: moment().weekday(props.day1),
    desc: 'Chin-ups: 3 sets of 10, Back Raises: 3 sets of 15, Dumbbell Bench Press: 3 sets of 10, Rear Laterals: 3 sets of 20'
  },
  {
    title: 'Deadlift',
    allDay: true,
    start: moment().weekday(props.day2),
    end: moment().weekday(props.day2),
    desc: "Weight/Reps: " + props.deadliftW1D0 + ", " + props.deadliftW1D1 + ", " + props.deadliftW1D2
  },
  {
    title: 'Overhead Press',
    allDay: true,
    start: moment().weekday(props.day2),
    end: moment().weekday(props.day2),
    desc:  "Weight/Reps: " + props.ohpW1D0 + ", " + props.ohpW1D1 + ", " + props.ohpW1D2
  },
  {
    title: 'Accessory',
    allDay: true,
    start: moment().weekday(props.day2),
    end: moment().weekday(props.day2),
    desc: 'Dumbbell Rows: 3 sets of 10, Dips: 3 sets of 10-15, Good Mornings: 3 sets of 10, Curls: 3 sets of 10'
  },
  {
    title: 'Accessory (optional)',
    allDay: true,
    start: moment().weekday(props.day2),
    end: moment().weekday(props.day2),
    desc: 'Dumbbell Rows: 3 sets of 10, Dips: 3 sets of 10-15, Good Mornings: 3 sets of 10, Curls: 3 sets of 10'
  },
  {
    title: 'Squat',
    allDay: true,
    start: moment().weekday(props.day1 + 7),
    end: moment().weekday(props.day1 + 7),
    desc: "Weight/Reps: " + props.squatW1D0 + ", " + props.squatW1D1 + ", " + props.squatW1D2
  },
  {
    title: 'Bench',
    allDay: true,
    start: moment().weekday(props.day1 + 7),
    end: moment().weekday(props.day1 + 7),
    desc: "Weight/Reps: " + props.squatW1D0 + ", " + props.squatW1D1 + ", " + props.squatW1D2
  },
  {
    title: 'Accessory',
    allDay: true,
    start: moment().weekday(props.day1 + 7),
    end: moment().weekday(props.day1 + 7),
    desc: 'Chin-ups: 3 sets of 10, Back Raises: 3 sets of 15, Dumbbell Bench Press: 3 sets of 10, Rear Laterals: 3 sets of 20'
  },
  {
    title: 'Accessory (optional)',
    allDay: true,
    start: moment().weekday(props.day1 + 7),
    end: moment().weekday(props.day1 + 7),
    desc: 'Chin-ups: 3 sets of 10, Back Raises: 3 sets of 15, Dumbbell Bench Press: 3 sets of 10, Rear Laterals: 3 sets of 20'
  },
  {
    title: 'Deadlift',
    allDay: true,
    start: moment().weekday(props.day2 + 7),
    end: moment().weekday(props.day2 + 7),
    desc: "Weight/Reps: " + props.deadliftW1D0 + ", " + props.deadliftW1D1 + ", " + props.deadliftW1D2
  },
  {
    title: 'Overhead Press',
    allDay: true,
    start: moment().weekday(props.day2 + 7),
    end: moment().weekday(props.day2 + 7),
    desc:  "Weight/Reps: " + props.ohpW1D0 + ", " + props.ohpW1D1 + ", " + props.ohpW1D2
  },
  {
    title: 'Accessory',
    allDay: true,
    start: moment().weekday(props.day2 + 7),
    end: moment().weekday(props.day2 + 7),
    desc: 'Dumbbell Rows: 3 sets of 10, Dips: 3 sets of 10-15, Good Mornings: 3 sets of 10, Curls: 3 sets of 10'
  },
  {
    title: 'Accessory (optional)',
    allDay: true,
    start: moment().weekday(props.day2 + 7),
    end: moment().weekday(props.day2 + 7),
    desc: 'Dumbbell Rows: 3 sets of 10, Dips: 3 sets of 10-15, Good Mornings: 3 sets of 10, Curls: 3 sets of 10'
  },
  {
    title: 'Squat',
    allDay: true,
    start: moment().weekday(props.day1 + 14),
    end: moment().weekday(props.day1 + 14),
    desc: "Weight/Reps: " + props.squatW1D0 + ", " + props.squatW1D1 + ", " + props.squatW1D2
  },
  {
    title: 'Bench',
    allDay: true,
    start: moment().weekday(props.day1 + 14),
    end: moment().weekday(props.day1 + 14),
    desc: '5/3/1 sets and reps'
  },
  {
    title: 'Accessory 1',
    allDay: true,
    start: moment().weekday(props.day1 + 14),
    end: moment().weekday(props.day1 + 14),
    desc: 'Chin-ups: 3 sets of 10, Back Raises: 3 sets of 15, Dumbbell Bench Press: 3 sets of 10, Rear Laterals: 3 sets of 20'
  },
  {
    title: 'Accessory 2(optional)',
    allDay: true,
    start: moment().weekday(props.day1 + 14),
    end: moment().weekday(props.day1 + 14),
    desc: 'Chin-ups: 3 sets of 10, Back Raises: 3 sets of 15, Dumbbell Bench Press: 3 sets of 10, Rear Laterals: 3 sets of 20'
  },
  {
    title: 'Deadlift',
    allDay: true,
    start: moment().weekday(props.day2 + 14),
    end: moment().weekday(props.day2 + 14),
    desc: '5/3/1 sets and reps'
  },
  {
    title: 'Press',
    allDay: true,
    start: moment().weekday(props.day2 + 14),
    end: moment().weekday(props.day2 + 14),
    desc: '5/3/1 sets and reps'
  },
  {
    title: 'Accessory 1',
    allDay: true,
    start: moment().weekday(props.day2 + 14),
    end: moment().weekday(props.day2 + 14),
    desc: 'Dumbbell Rows: 3 sets of 10, Dips: 3 sets of 10-15, Good Mornings: 3 sets of 10, Curls: 3 sets of 10'
  },
  {
    title: 'Accessory 2(optional)',
    allDay: true,
    start: moment().weekday(props.day2 + 14),
    end: moment().weekday(props.day2 + 14),
    desc: 'Dumbbell Rows: 3 sets of 10, Dips: 3 sets of 10-15, Good Mornings: 3 sets of 10, Curls: 3 sets of 10'
  },
  {
    title: 'Squat',
    allDay: true,
    start: moment().weekday(props.day1 + 21),
    end: moment().weekday(props.day1 + 21),
    desc: '5/3/1 sets and reps'
  },
  {
    title: 'Bench',
    allDay: true,
    start: moment().weekday(props.day1 + 21),
    end: moment().weekday(props.day1 + 21),
    desc: '5/3/1 sets and reps'
  },
  {
    title: 'Accessory 1',
    allDay: true,
    start: moment().weekday(props.day1 + 21),
    end: moment().weekday(props.day1 + 21),
    desc: 'Chin-ups: 3 sets of 10, Back Raises: 3 sets of 15, Dumbbell Bench Press: 3 sets of 10, Rear Laterals: 3 sets of 20'
  },
  {
    title: 'Accessory 2(optional)',
    allDay: true,
    start: moment().weekday(props.day1 + 21),
    end: moment().weekday(props.day1 + 21),
    desc: 'Chin-ups: 3 sets of 10, Back Raises: 3 sets of 15, Dumbbell Bench Press: 3 sets of 10, Rear Laterals: 3 sets of 20'
  },
  {
    title: 'Deadlift',
    allDay: true,
    start: moment().weekday(props.day2 + 21),
    end: moment().weekday(props.day2 + 21),
    desc: '5/3/1 sets and reps'
  },
  {
    title: 'Press',
    allDay: true,
    start: moment().weekday(props.day2 + 21),
    end: moment().weekday(props.day2 + 21),
    desc: '5/3/1 sets and reps'
  },
  {
    title: 'Accessory 1',
    allDay: true,
    start: moment().weekday(props.day2 + 21),
    end: moment().weekday(props.day2 + 21),
    desc: 'Dumbbell Rows: 3 sets of 10, Dips: 3 sets of 10-15, Good Mornings: 3 sets of 10, Curls: 3 sets of 10'
  },
  {
    'title': 'Accessory 2(optional)',
    allDay: true,
    start: moment().weekday(props.day2 + 21),
    end: moment().weekday(props.day2 + 21),
    desc: 'Dumbbell Rows: 3 sets of 10, Dips: 3 sets of 10-15, Good Mornings: 3 sets of 10, Curls: 3 sets of 10'
  },
]
}

export {BBB4days, BBB3days, BBB2days};



