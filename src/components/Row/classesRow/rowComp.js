import './rowComp.css'
import Media from 'react-media'

const RowComp = ({row_type,class_name,time_of_class,join_link,button_status}) => {
  return(
    <div>
      <Media query="(max-width:480px)">
    {matches =>{
      if(matches){
            return (
              <div className="Row__Container_media">
               
                <div className = "Row__Title_m">
                  <p className = "Row__TitleText">{row_type}</p>
                </div>
                <div className="media_">
                <div className="Row__Lecture_m">
                  <p>{class_name}</p>
                </div>
                <div className="Row__LectureTime_m">
                  <p>{time_of_class}</p>
                </div>
                </div>
                <div className="Row__JoinButtonDiv_m">
                  <a className={(button_status==0) ? "Row__JoinButton_Off_m" : "Row__JoinButton_m"}href={join_link} target="_blank" title={ (button_status==1) ? "This is a general link for " + class_name +" class. Do not depend completely on this link." : null}>{class_name == "CMOS / CAO / ESD" || class_name == "Algorithms" ? "N/A" : "Join Now"}</a>
                </div>
              </div>
          );
      }
      else{
            return (
              <div className="Row__Container">
                <div className = "Row__Title">
                  <p className = "Row__TitleText">{row_type}</p>
                </div>
                <div className="Row__Lecture">
                  <p>{class_name}</p>
                </div>
                <div className="Row__LectureTime">
                  <p>{time_of_class}</p>
                </div>
                <div className="Row__JoinButtonDiv">
                  <a className={(button_status==0) ? "Row__JoinButton_Off" : "Row__JoinButton"}href={join_link} target="_blank" title={ (button_status==1) ? "This is a general link for " + class_name +" class. Do not depend completely on this link." : null}>{class_name == "CMOS / CAO / ESD" || class_name == "Algorithms" ? "N/A" : "Join Now"}</a>
                </div>
              </div>
          );
        }
      }
    }
  </Media>
    </div>
  )

}

  
export default RowComp;
  