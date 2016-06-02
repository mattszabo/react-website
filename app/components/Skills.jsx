import React from 'react';

export default class Skills extends React.Component {

  render () {
    const skillList = ['HTML', 'JavaScript', 'jQuery', 'AJAX', 'React', 'CSS'];
    return (
      <div>
        <ul>
          {skillList.map((topic, index) => <li key={index}>{topic}</li>)}
        </ul>
      </div>
    );
  }
}
