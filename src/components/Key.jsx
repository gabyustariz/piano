import { Fragment } from "react";
import { useState, useEffect } from "react";

const Key = ({note, id, sound}) => {
    const flatNotes = ['w', 'e', 't', 'y', 'u'];
    const validNote = () => {
        return !flatNotes.includes(note);
    }


    function useKeyPress(targetKey, url) {

        // State for keeping track of whether key is pressed
        const [keyPressed, setKeyPressed] = useState(false);
        const [audio] = useState(new Audio(url));
        const [playing, setPlaying] = useState(false);

        useEffect(() => {
            // console.log(audio);
            // console.log(playing);
            playing ? audio.play() : audio.load();
            },
            [playing]
        );

        useEffect(() => {
            audio.addEventListener('ended', () => setPlaying(false));
            return () => {
              audio.removeEventListener('ended', () => setPlaying(false));
            };
        }, []);

        // If pressed key is our target key then set to true
        const downHandler = ({ key }) => {
          if (key === targetKey) {
            setKeyPressed(true);
            setPlaying(true);
          }
        };
        // If released key is our target key then set to false
        const upHandler = ({ key }) => {
          if (key === targetKey) {
            setKeyPressed(false);
            setPlaying(false);
          }
        };
        // Add event listeners
        useEffect(() => {
          window.addEventListener("keydown", downHandler);
          window.addEventListener("keyup", upHandler);
          // Remove event listeners on cleanup
          return () => {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
          };
        }, []); // Empty array ensures that effect is only run on mount and unmount
        return keyPressed;
      }

    // function playAudio(url) {
    //     console.log(url);
    //     new Audio(url).play();
    // }

    const keyPressed = useKeyPress(note, sound);

    return (
        <Fragment>
        {validNote() ? (
            <div className={`key ${keyPressed ? "pressed" : ""}`}>
                {/* onclick={`${useKeyPress(note, sound)}`} */}
                {/* <p className="key-text" onclick={`${playAudio(sound)}`}> */}
                <p className="key-text">
                </p>
            </div>
        ) : (
            <div className={`key key-flat ${keyPressed ? "pressed" : ""}`}>
                <p className="key-text">
                </p>
            </div>
        )}
        </Fragment>
    );
}

export default Key;