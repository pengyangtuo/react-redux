import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseAction';

describe('Course Reducer', () => {
  it('should add course when passed CREATE_COURSE_SUCCESS', () => {
    // arrange
    const initialState = [
      {title: 'A'},
      {title: 'B'}
    ];

    const newCourse = {title: 'C'};
    const action = actions.createCourseSuccess(newCourse);

    // act
    const newState = courseReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('A');

  });

  it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
    const initialState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'},
      {id: 'C', title: 'C'},
    ];
    const course = {id: 'B', title: 'New title'};
    const action = actions.updateCourseSuccess(course);

    const newState = courseReducer(initialState, action);
    const updateCourse = newState.find(a => a.id == course.id);
    const untouchedCourse = newState.find(a => a.id == 'A');

    expect(updateCourse.title).toEqual('New title');
    expect(untouchedCourse.title).toEqual('A');
    expect(newState.length).toEqual(3);
  });
});