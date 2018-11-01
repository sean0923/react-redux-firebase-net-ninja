import React from 'react';
import moment from 'moment';

const Notifications = ({ notifications }) => {
  return (
    <div className="section">
      <div className="card">
        <div className="card-content">
          <div className="card-title">Notification</div>
          <ul className="notification">
            {notifications &&
              notifications.map(item => {
                const { id, content, user, time } = item;
                return (
                  <div key={id}>
                    <div>
                      <span className="pink-text">{user} </span>
                      <span>{content}</span>
                    </div>
                    <div className="grey-text">{moment(time.toDate()).fromNow()}</div>
                  </div>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
