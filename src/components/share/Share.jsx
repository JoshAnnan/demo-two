import "./share.css";
import { PermMedia } from "@mui/icons-material";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            classname="shareProfileImg"
            src="/person/p1.jpg"
            alt=""
            width={700}
          />
          <input
            placeholder="What's in your mind Joshua?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia className="shareIcon" />
              <span className="shareOptionText">Photo/Video</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
