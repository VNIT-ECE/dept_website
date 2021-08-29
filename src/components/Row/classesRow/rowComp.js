import './rowComp.css'
import Media from 'react-media'

const RowComp = ({ row_type, class_name, time_of_class, join_link, button_status }) => {
  return (
    <div>
      {/* <Media query="(max-width:480px)">
        {matches => {
          if (matches) {
            return (
              <div className="Row__Container_media">

                <div className="Row__Title_m">
                  <p className="text-2xl  text-teal-accent-700 Row__TitleText">{row_type}</p>
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
                  <a className={(button_status == 0) ? "Row__JoinButton_Off_m" : "Row__JoinButton_m"} href={join_link} target="_blank" rel="noreferrer" title={(button_status == 1) ? "This is a general link for " + class_name + " class. Do not depend completely on this link." : null}>{class_name == "DE" || class_name == "Algo" ? "Check Group" : "Join Now"}</a>
                </div>
              </div>
            );
          }
          else {
            return (
              <div className="Row__Container">
                <div className="Row__Title">
                  <p className="text-2xl  text-teal-accent-700 Row__TitleText">{row_type}</p>
                </div>
                <div className="Row__Lecture">
                  <p className="text-2xl  ">{class_name}</p>
                </div>
                <div className="Row__LectureTime">
                  <p className="text-2xl  ">{time_of_class}</p>
                </div>
                <div className="Row__JoinButtonDiv" >
                  <a className="text-2xl bg-teal-accent-700 "  className={(button_status === 0) ? "Row__JoinButton_Off" : "Row__JoinButton"} href={join_link} target="_blank" rel="noreferrer" title={(button_status === 1) ? "This is a general link for " + class_name + " class. Do not depend completely on this link." : null}>{class_name === "DE" || class_name === "Algo" ? "Check Group" : "Join Now"}</a>
                </div>
              </div>
            );
          }
        }
        }
      </Media> */}
      <div >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between rounded-3xl shadow-md">
        <p className="text-2xl font-bold text-gray-900 sm:text-2xl">
          <span className="block">{row_type}</span>
          <span className="block text-teal-accent-400">{class_name}</span>
        </p>
        <p className="text-2xl font-bold text-gray-900 sm:text-2xl">
          <span className="block">Start Time</span>
          <span className="block text-teal-accent-400">{time_of_class}</span>
        </p>
        
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        
          <div className="inline-flex rounded-md shadow">
            <a
              href={join_link}
              className={(button_status === 0) ? " cursor-pointer font-bold w-64  text-2xl  text-white sm:text-2xl inline-flex items-center justify-center px-5 py-3 border border-transparent text-base  rounded-md text-white bg-gray-400 hoverbg-gray-400" : "w-64  text-2xl  text-white sm:text-2xl inline-flex items-center justify-center px-5 py-3 border border-transparent text-base  rounded-md text-white font-bold bg-teal-accent-700 hover:bg-teal-500 text-white"}
              target="_blank"
            >
              {join_link==="" ? "Check Group" : "Join Now"}
            </a>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  )

}


export default RowComp;