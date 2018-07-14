import React from 'react';
import { Button } from 'reactstrap';
import { firebaseDb } from './firebase';
import { filestackDb } from './filestack';

const UploadImage = props => {
  const renderPicker = () => {
    if (props.type === 'profile') {
      const ratio = 1 / 1;
      filestackDb
        .pick({
          transformations: {
            crop: {
              aspectRatio: ratio,
              force: true
            }
          }
        })
        .then(function(response) {
          const imageUrl = response.filesUploaded[0].url;

          const date = Date();

          firebaseDb
            .ref('users/' + props.userId + '/images/')
            .push({
              profileImage: imageUrl,
              date: date
            })
            .then(() => {
              props.fetchProfileImage(props.userId);
            });
        });
    } else if (props.type === 'other') {
      filestackDb.pick({}).then(function(response) {
        const imageUrl = response.filesUploaded[0].url;

        const date = Date();

        firebaseDb
          .ref('users/' + props.userId + '/images/')
          .push({
            userImage: imageUrl,
            date: date
          })
          .then(() => {
            props.fetchUserImages(props.userId);
          });
      });
    }
  };

  return (
    <div className="class-name">
        <div className="uploadwrap">
          <Button className="centerhomepage"
            bsSize="small" 
            onClick={() => renderPicker()}
            className="uploadbtn"
          >
          {props.caption}
          </Button>
        </div>
    </div>
  );
};

export default UploadImage;
