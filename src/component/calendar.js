import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Popup from 'react-popup';
import * as actions from './action';
import { bindActionCreators } from 'redux';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.less';
import BigCalendar from 'react-big-calendar';
import { BBB4days, BBB3days, BBB2days } from './BBB';
import { jackShit4Days, jackShit3Days, jackShit2Days } from "./jackShit";
import { Tri4days, Tri3days } from "./Triumvirate"

import 'react-big-calendar/lib/less/styles.less';
import './calendar.css';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

function Event({ event }) {
  return (
    <span>
      <strong>{event.title}</strong>
    </span>
  );
}

class Dnd extends React.Component {

  state = {};

  render() {
    const { state } = this.props;
    let userEvents;
    if (state.fetchCalendar.calendar) {
      if (state.fetchCalendar.calendar.selectedWeekday) {
        var day1;
        var day2;
        var day3;
        var day4;

        for (
          let i = 0;
          i < state.fetchCalendar.calendar.selectedWeekday.length;
          i++
        ) {
          day1 = state.fetchCalendar.calendar.selectedWeekday[0];
          day2 = state.fetchCalendar.calendar.selectedWeekday[1];
          day3 = state.fetchCalendar.calendar.selectedWeekday[2];
          day4 = state.fetchCalendar.calendar.selectedWeekday[3];
        }

        if (!this.state.fetched) {
          this.setState({ fetched: true });
        }
      }
      if (state.fetchCalendar.calendar.benchTemplate) {
        var benchArray0;
        var benchArray1;
        var benchArray2;
        var benchArray3;
        for (let i = 0; i < state.fetchCalendar.calendar.benchTemplate.length; i++) {
          benchArray0 = state.fetchCalendar.calendar.benchTemplate[0];
          benchArray1 = state.fetchCalendar.calendar.benchTemplate[1];
          benchArray2 = state.fetchCalendar.calendar.benchTemplate[2];
          benchArray3 = state.fetchCalendar.calendar.benchTemplate[3];
        }
        var benchW1D0;
        var benchW1D1;
        var benchW1D2;
        for (let i = 0; i < benchArray0.length; i++) {
          benchW1D0 = benchArray0[0].toString();
          benchW1D1 = benchArray0[1];
          benchW1D2 = benchArray0[2];
        }
        var benchW2D0;
        var benchW2D1;
        var benchW2D2;
        for (let i = 0; i < benchArray1.length; i++) {
          benchW2D0 = benchArray1[0];
          benchW2D1 = benchArray1[1];
          benchW2D2 = benchArray1[2];
        }
        var benchW3D0;
        var benchW3D1;
        var benchW3D2;
        for (let i = 0; i < benchArray2.length; i++) {
          benchW3D0 = benchArray2[0];
          benchW3D1 = benchArray2[1];
          benchW3D2 = benchArray2[2];
        }
        var benchW4D0;
        var benchW4D1;
        var benchW4D2;
        for (let i = 0; i < benchArray3.length; i++) {
          benchW4D0 = benchArray3[0];
          benchW4D1 = benchArray3[1];
          benchW4D2 = benchArray3[2];
        }
        var deadliftArray0;
        var deadliftArray1;
        var deadliftArray2;
        var deadliftArray3;
        for (let i = 0; i < state.fetchCalendar.calendar.deadliftTemplate.length; i++) {
          deadliftArray0 = state.fetchCalendar.calendar.deadliftTemplate[0];
          deadliftArray1 = state.fetchCalendar.calendar.deadliftTemplate[1];
          deadliftArray2 = state.fetchCalendar.calendar.deadliftTemplate[2];
          deadliftArray3 = state.fetchCalendar.calendar.deadliftTemplate[3];
        }
        var deadliftW1D0;
        var deadliftW1D1;
        var deadliftW1D2;
        for (let i = 0; i < deadliftArray0.length; i++) {
          deadliftW1D0 = deadliftArray0[0];
          deadliftW1D1 = deadliftArray0[1];
          deadliftW1D2 = deadliftArray0[2];
        }
        var deadliftW2D0;
        var deadliftW2D1;
        var deadliftW2D2;
        for (let i = 0; i < deadliftArray1.length; i++) {
          deadliftW2D0 = deadliftArray1[0];
          deadliftW2D1 = deadliftArray1[1];
          deadliftW2D2 = deadliftArray1[2];
        }
        var deadliftW3D0;
        var deadliftW3D1;
        var deadliftW3D2;
        for (let i = 0; i < deadliftArray2.length; i++) {
          deadliftW3D0 = deadliftArray2[0];
          deadliftW3D1 = deadliftArray2[1];
          deadliftW3D2 = deadliftArray2[2];
        }
        var deadliftW4D0;
        var deadliftW4D1;
        var deadliftW4D2;
        for (let i = 0; i < deadliftArray3.length; i++) {
          deadliftW4D0 = deadliftArray3[0];
          deadliftW4D1 = deadliftArray3[1];
          deadliftW4D2 = deadliftArray3[2];
        }
        var ohpArray0;
        var ohpArray1;
        var ohpArray2;
        var ohpArray3;
        for (let i = 0; i < state.fetchCalendar.calendar.ohpTemplate.length; i++) {
          ohpArray0 = state.fetchCalendar.calendar.ohpTemplate[0];
          ohpArray1 = state.fetchCalendar.calendar.ohpTemplate[1];
          ohpArray2 = state.fetchCalendar.calendar.ohpTemplate[2];
          ohpArray3 = state.fetchCalendar.calendar.ohpTemplate[3];
        }
        var ohpW1D0;
        var ohpW1D1;
        var ohpW1D2;
        for (let i = 0; i < ohpArray0.length; i++) {
          ohpW1D0 = ohpArray0[0];
          ohpW1D1 = ohpArray0[1];
          ohpW1D2 = ohpArray0[2];
        }
        var ohpW2D0;
        var ohpW2D1;
        var ohpW2D2;
        for (let i = 0; i < ohpArray1.length; i++) {
          ohpW2D0 = ohpArray1[0];
          ohpW2D1 = ohpArray1[1];
          ohpW2D2 = ohpArray1[2];
        }
        var ohpW3D0;
        var ohpW3D1;
        var ohpW3D2;
        for (let i = 0; i < ohpArray2.length; i++) {
          ohpW3D0 = ohpArray2[0];
          ohpW3D1 = ohpArray2[1];
          ohpW3D2 = ohpArray2[2];
        }
        var ohpW4D0;
        var ohpW4D1;
        var ohpW4D2;
        for (let i = 0; i < ohpArray3.length; i++) {
          ohpW4D0 = ohpArray3[0];
          ohpW4D1 = ohpArray3[1];
          ohpW4D2 = ohpArray3[2];
        }
        var squatArray0;
        var squatArray1;
        var squatArray2;
        var squatArray3;
        for (let i = 0; i < state.fetchCalendar.calendar.squatTemplate.length; i++) {
          squatArray0 = state.fetchCalendar.calendar.squatTemplate[0];
          squatArray1 = state.fetchCalendar.calendar.squatTemplate[1];
          squatArray2 = state.fetchCalendar.calendar.squatTemplate[2];
          squatArray3 = state.fetchCalendar.calendar.squatTemplate[3];
        }
        var squatW1D0;
        var squatW1D1;
        var squatW1D2;
        for (let i = 0; i < squatArray0.length; i++) {
          squatW1D0 = squatArray0[0];
          squatW1D1 = squatArray0[1];
          squatW1D2 = squatArray0[2];
        }
        var squatW2D0;
        var squatW2D1;
        var squatW2D2;
        for (let i = 0; i < squatArray1.length; i++) {
          squatW2D0 = squatArray1[0];
          squatW2D1 = squatArray1[1];
          squatW2D2 = squatArray1[2];
        }
        var squatW3D0;
        var squatW3D1;
        var squatW3D2;
        for (let i = 0; i < squatArray2.length; i++) {
          squatW3D0 = squatArray2[0];
          squatW3D1 = squatArray2[1];
          squatW3D2 = squatArray2[2];
        }
        var squatW4D0;
        var squatW4D1;
        var squatW4D2;
        for (let i = 0; i < squatArray3.length; i++) {
          squatW4D0 = squatArray3[0];
          squatW4D1 = squatArray3[1];
          squatW4D2 = squatArray3[2];
        }
      }
    }

    if (state.fetchCalendar.calendar) {
      if (state.fetchCalendar.calendar.selectedExercise === 'boringButBig') {
        if (state.fetchCalendar.calendar.selectedDay === '4days') {
          userEvents = BBB4days({
            day1, day2, day3, day4,
            benchW1D0, benchW1D1, benchW1D2,
            benchW2D0, benchW2D1, benchW2D2,
            benchW3D0, benchW3D1, benchW3D2,
            benchW4D0, benchW4D1, benchW4D2,
            deadliftW1D0, deadliftW1D1, deadliftW1D2,
            deadliftW2D0, deadliftW2D1, deadliftW2D2,
            deadliftW3D0, deadliftW3D1, deadliftW3D2,
            deadliftW4D0, deadliftW4D1, deadliftW4D2,
            ohpW1D0, ohpW1D1, ohpW1D2,
            ohpW2D0, ohpW2D1, ohpW2D2,
            ohpW3D0, ohpW3D1, ohpW3D2,
            ohpW4D0, ohpW4D1, ohpW4D2,
            squatW1D0, squatW1D1, squatW1D2,
            squatW2D0, squatW2D1, squatW2D2,
            squatW3D0, squatW3D1, squatW3D2,
            squatW4D0, squatW4D1, squatW4D2,
          });
        } else if (state.fetchCalendar.calendar.selectedDay === '3days') {
          userEvents = BBB3days({
            day1, day2, day3,
            benchW1D0, benchW1D1, benchW1D2,
            benchW2D0, benchW2D1, benchW2D2,
            benchW3D0, benchW3D1, benchW3D2,
            benchW4D0, benchW4D1, benchW4D2,
            deadliftW1D0, deadliftW1D1, deadliftW1D2,
            deadliftW2D0, deadliftW2D1, deadliftW2D2,
            deadliftW3D0, deadliftW3D1, deadliftW3D2,
            deadliftW4D0, deadliftW4D1, deadliftW4D2,
            ohpW1D0, ohpW1D1, ohpW1D2,
            ohpW2D0, ohpW2D1, ohpW2D2,
            ohpW3D0, ohpW3D1, ohpW3D2,
            ohpW4D0, ohpW4D1, ohpW4D2,
            squatW1D0, squatW1D1, squatW1D2,
            squatW2D0, squatW2D1, squatW2D2,
            squatW3D0, squatW3D1, squatW3D2,
            squatW4D0, squatW4D1, squatW4D2,
          });
        } else if (state.fetchCalendar.calendar.selectedDay === '2days') {
          userEvents = BBB2days({
            day1, day2,
            benchW1D0, benchW1D1, benchW1D2,
            benchW2D0, benchW2D1, benchW2D2,
            benchW3D0, benchW3D1, benchW3D2,
            benchW4D0, benchW4D1, benchW4D2,
            deadliftW1D0, deadliftW1D1, deadliftW1D2,
            deadliftW2D0, deadliftW2D1, deadliftW2D2,
            deadliftW3D0, deadliftW3D1, deadliftW3D2,
            deadliftW4D0, deadliftW4D1, deadliftW4D2,
            ohpW1D0, ohpW1D1, ohpW1D2,
            ohpW2D0, ohpW2D1, ohpW2D2,
            ohpW3D0, ohpW3D1, ohpW3D2,
            ohpW4D0, ohpW4D1, ohpW4D2,
            squatW1D0, squatW1D1, squatW1D2,
            squatW2D0, squatW2D1, squatW2D2,
            squatW3D0, squatW3D1, squatW3D2,
            squatW4D0, squatW4D1, squatW4D2,
          });
        }
      }
    }
    if (state.fetchCalendar.calendar) {
        console.log("I KNOW THIS WORKS")
      if (state.fetchCalendar.calendar.selectedExercise === 'jackShit') {
        console.log("JACKSHIT", day1, day2, day3, day4)
          if (state.fetchCalendar.calendar.selectedDay === '4days') {
            userEvents = jackShit4Days({
              day1, day2, day3, day4,
              benchW1D0, benchW1D1, benchW1D2,
              benchW2D0, benchW2D1, benchW2D2,
              benchW3D0, benchW3D1, benchW3D2,
              benchW4D0, benchW4D1, benchW4D2,
              deadliftW1D0, deadliftW1D1, deadliftW1D2,
              deadliftW2D0, deadliftW2D1, deadliftW2D2,
              deadliftW3D0, deadliftW3D1, deadliftW3D2,
              deadliftW4D0, deadliftW4D1, deadliftW4D2,
              ohpW1D0, ohpW1D1, ohpW1D2,
              ohpW2D0, ohpW2D1, ohpW2D2,
              ohpW3D0, ohpW3D1, ohpW3D2,
              ohpW4D0, ohpW4D1, ohpW4D2,
              squatW1D0, squatW1D1, squatW1D2,
              squatW2D0, squatW2D1, squatW2D2,
              squatW3D0, squatW3D1, squatW3D2,
              squatW4D0, squatW4D1, squatW4D2,
            });
        } else if (state.fetchCalendar.calendar.selectedDay === '3days') {
            userEvents = jackShit3Days({
              day1, day2, day3,
              benchW1D0, benchW1D1, benchW1D2,
              benchW2D0, benchW2D1, benchW2D2,
              benchW3D0, benchW3D1, benchW3D2,
              benchW4D0, benchW4D1, benchW4D2,
              deadliftW1D0, deadliftW1D1, deadliftW1D2,
              deadliftW2D0, deadliftW2D1, deadliftW2D2,
              deadliftW3D0, deadliftW3D1, deadliftW3D2,
              deadliftW4D0, deadliftW4D1, deadliftW4D2,
              ohpW1D0, ohpW1D1, ohpW1D2,
              ohpW2D0, ohpW2D1, ohpW2D2,
              ohpW3D0, ohpW3D1, ohpW3D2,
              ohpW4D0, ohpW4D1, ohpW4D2,
              squatW1D0, squatW1D1, squatW1D2,
              squatW2D0, squatW2D1, squatW2D2,
              squatW3D0, squatW3D1, squatW3D2,
              squatW4D0, squatW4D1, squatW4D2,
            });
          } else if (state.fetchCalendar.calendar.selectedDay === '2days') {
            userEvents = jackShit2Days({
              day1, day2,
              benchW1D0, benchW1D1, benchW1D2,
              benchW2D0, benchW2D1, benchW2D2,
              benchW3D0, benchW3D1, benchW3D2,
              benchW4D0, benchW4D1, benchW4D2,
              deadliftW1D0, deadliftW1D1, deadliftW1D2,
              deadliftW2D0, deadliftW2D1, deadliftW2D2,
              deadliftW3D0, deadliftW3D1, deadliftW3D2,
              deadliftW4D0, deadliftW4D1, deadliftW4D2,
              ohpW1D0, ohpW1D1, ohpW1D2,
              ohpW2D0, ohpW2D1, ohpW2D2,
              ohpW3D0, ohpW3D1, ohpW3D2,
              ohpW4D0, ohpW4D1, ohpW4D2,
              squatW1D0, squatW1D1, squatW1D2,
              squatW2D0, squatW2D1, squatW2D2,
              squatW3D0, squatW3D1, squatW3D2,
              squatW4D0, squatW4D1, squatW4D2,
            });
          } else {
            userEvents = [];
          }
        }
      }
      if (state.fetchCalendar.calendar) {
      if (state.fetchCalendar.calendar.selectedExercise === "triumvirate") {
          if (state.fetchCalendar.calendar.selectedDay === '4days') {
            userEvents = Tri4days({
              day1, day2, day3, day4,
              benchW1D0, benchW1D1, benchW1D2,
              benchW2D0, benchW2D1, benchW2D2,
              benchW3D0, benchW3D1, benchW3D2,
              benchW4D0, benchW4D1, benchW4D2,
              deadliftW1D0, deadliftW1D1, deadliftW1D2,
              deadliftW2D0, deadliftW2D1, deadliftW2D2,
              deadliftW3D0, deadliftW3D1, deadliftW3D2,
              deadliftW4D0, deadliftW4D1, deadliftW4D2,
              ohpW1D0, ohpW1D1, ohpW1D2,
              ohpW2D0, ohpW2D1, ohpW2D2,
              ohpW3D0, ohpW3D1, ohpW3D2,
              ohpW4D0, ohpW4D1, ohpW4D2,
              squatW1D0, squatW1D1, squatW1D2,
              squatW2D0, squatW2D1, squatW2D2,
              squatW3D0, squatW3D1, squatW3D2,
              squatW4D0, squatW4D1, squatW4D2,
            });
        } else if (state.fetchCalendar.calendar.selectedDay === '3days') {
            userEvents = Tri3days({
              day1, day2, day3,
              benchW1D0, benchW1D1, benchW1D2,
              benchW2D0, benchW2D1, benchW2D2,
              benchW3D0, benchW3D1, benchW3D2,
              benchW4D0, benchW4D1, benchW4D2,
              deadliftW1D0, deadliftW1D1, deadliftW1D2,
              deadliftW2D0, deadliftW2D1, deadliftW2D2,
              deadliftW3D0, deadliftW3D1, deadliftW3D2,
              deadliftW4D0, deadliftW4D1, deadliftW4D2,
              ohpW1D0, ohpW1D1, ohpW1D2,
              ohpW2D0, ohpW2D1, ohpW2D2,
              ohpW3D0, ohpW3D1, ohpW3D2,
              ohpW4D0, ohpW4D1, ohpW4D2,
              squatW1D0, squatW1D1, squatW1D2,
              squatW2D0, squatW2D1, squatW2D2,
              squatW3D0, squatW3D1, squatW3D2,
              squatW4D0, squatW4D1, squatW4D2,
            });
          } 
          // else if (state.fetchCalendar.calendar.selectedDay === '2days') {
          //   userEvents = jackShit2Days({
          //     day1, day2,
          //     benchW1D0, benchW1D1, benchW1D2,
          //     benchW2D0, benchW2D1, benchW2D2,
          //     benchW3D0, benchW3D1, benchW3D2,
          //     benchW4D0, benchW4D1, benchW4D2,
          //     deadliftW1D0, deadliftW1D1, deadliftW1D2,
          //     deadliftW2D0, deadliftW2D1, deadliftW2D2,
          //     deadliftW3D0, deadliftW3D1, deadliftW3D2,
          //     deadliftW4D0, deadliftW4D1, deadliftW4D2,
          //     ohpW1D0, ohpW1D1, ohpW1D2,
          //     ohpW2D0, ohpW2D1, ohpW2D2,
          //     ohpW3D0, ohpW3D1, ohpW3D2,
          //     ohpW4D0, ohpW4D1, ohpW4D2,
          //     squatW1D0, squatW1D1, squatW1D2,
          //     squatW2D0, squatW2D1, squatW2D2,
          //     squatW3D0, squatW3D1, squatW3D2,
          //     squatW4D0, squatW4D1, squatW4D2,
          //   });
          // } 
          else {
            userEvents = [];
          }
        }
      }

    console.log('Fucking userEvents', userEvents);

    return (
      <div>
        {this.state.fetched && (
          <BigCalendar
            {...this.props}
            popup
            selectable
            step={'allday'}
            events={userEvents}
            defaultView={this.props.view}
            views={this.props.views}
            scrollToTime={new Date(2017, 1, 1, 6)}
            test="io"
            onSelectEvent={event => Popup.alert(event.desc, event.title)}
            components={{
              event: Event
            }}
          />
        )}
        <Popup
          className="mm-popup"
          btnClass="mm-popup__btn"
          closeBtn={true}
          closeHtml={null}
          defaultOk="Ok"
          defaultCancel="Cancel"
          wildClasses={false}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(
  Dnd,
  this.day1,
  this.day2,
  this.day3,
  this.day4
);
