import React from 'react';

export default class Skills extends React.Component {

  render () {
    const skillList = ['HTML', 'JavaScript', 'React', 'CSS', 'Webpack'];
    return (
      <div className='page page-skills'>
        <ul>
          {skillList.map((topic, index) => <li key={index}>{topic}</li>)}
        </ul>
      </div>
    );
  }
}
