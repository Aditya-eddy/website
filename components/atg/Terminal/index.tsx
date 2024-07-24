import {
  ForwardedRef,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { TerminalProps, TerminalCommands } from "./types"; // Assuming you have a types file where `TerminalCommands` is defined
import CloseIcon from "@mui/icons-material/Close"; // Use CloseIcon to mimic the red button on Mac

export interface AdditionalProps {
  inputRef: React.RefObject<HTMLInputElement>;
  hideTerminal: () => void;
  terminalTheme: boolean;
}

interface CombinedProps extends TerminalProps, AdditionalProps {}

export const Terminal = forwardRef(
  (props: CombinedProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
      history = [],
      promptLabel = ">",
      inputRef,
      commands = {},
      hideTerminal,
      terminalTheme,
    } = props;

    const [input, setInputValue] = useState<string>("");
    const [blinkingTrue, setBlinkingTrue] = useState<boolean>(true);
    const spanRef = useRef<HTMLSpanElement>(null);
    const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    console.log(terminalTheme);

    /**
     * Focus on the input whenever we render the terminal
     */
    useEffect(() => {
      inputRef.current?.focus();
    }, [inputRef]); // Ensure this runs only when inputRef changes

    const focusInput = useCallback(() => {
      inputRef.current?.focus();
    }, [inputRef]);

    /**
     * When user types something, we update the input value
     */
    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setBlinkingTrue(false);

        if (typingTimeoutRef.current) {
          clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
          setBlinkingTrue(true);
        }, 500); // 1 second delay after user stops typing
      },
      []
    );

    /**
     * When user presses enter, we execute the command
     */
    const handleInputKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
          const commandToExecute = commands?.[input];
          if (commandToExecute) {
            commandToExecute?.();
          } else {
            handleCommandNotFound();
          }
          setInputValue("");
          setBlinkingTrue(true);
        }
      },
      [commands, input]
    );

    // Function to handle command not found
    const handleCommandNotFound = () => {
      const commandNotFoundFunc = commands["__notFound__"];
      if (commandNotFoundFunc) {
        commandNotFoundFunc();
      }
    };

    /**
     * Update the input width based on the span width
     */
    // useEffect(() => {
    //   if (spanRef.current && inputRef.current) {
    //     inputRef.current.style.width = `${spanRef.current.offsetWidth+10}px`;
    //   }
    // }, [input]);

    /**
     * Handle focus and blur events for the input
     */
    useEffect(() => {
      const handleFocus = () => {
        setBlinkingTrue(true);
      };

      const handleBlur = () => {
        setBlinkingTrue(false);
      };

      const inputElement = inputRef.current;

      if (inputElement) {
        inputElement.addEventListener("focus", handleFocus);
        inputElement.addEventListener("blur", handleBlur);
      }

      return () => {
        if (inputElement) {
          inputElement.removeEventListener("focus", handleFocus);
          inputElement.removeEventListener("blur", handleBlur);
        }
      };
    }, [inputRef]);

    return (
      <div className="h-full">
        <div
          className={`${
            terminalTheme ? "terminal_light  bg-neutral-200 border border-y-gray-200 border-b-gray-200 " : "terminal "
          } font-courier w-full h-full relative  `}
          ref={ref}
          onClick={focusInput}
        >
          <div
            className={`absolute top-0  w-full flex justify-center items-center  bg-inherit p-2 px-3 ${
              terminalTheme
                ? " text-black bg-neutral-200 border border-gray-200  "
                : " text-white bg-neutral-600 "
            }`}
          >
            <p className="flex-grow text-center font-bold text-sm">TERMINAL</p>
            <button
              className={`close-button bg-primary-300 hover:bg-primary-400 rounded-full w-4 h-4 flex items-center justify-center`}
              aria-label="Close Terminal"
              onClick={hideTerminal}
            >
              <CloseIcon className="text-primary-300 hover:bg-primary-400 w-3 h-3" />
            </button>
          </div>
          <div className="p-1 px-3 ">
            {history.map((line, index) => (
              <div
                className={`${
                  terminalTheme ? "terminal__line_light" : "terminal__line"
                }`}
                key={`terminal-line-${index}-${line}`}
              >
                {line}
              </div>
            ))}
            <div
              className={`${
                terminalTheme ? "terminal__prompt_light" : "terminal__prompt"
              }`}
            >
              <div
                className={`${
                  terminalTheme
                    ? "terminal__prompt__label_light"
                    : "terminal__prompt__label"
                }  `}
              >
                {promptLabel}
              </div>
              <div className="flex">
                <div className="relative w-1/2 bg-black">
                  <input
                    type="text"
                    value={input}
                    onKeyDown={handleInputKeyDown}
                    onChange={handleInputChange}
                    ref={inputRef}
                    className={`form-input  fat-cursor p-0 bg-inherit text-xs ml-2 border-none focus:outline-none appearance-none ${
                      terminalTheme
                        ? "text-secondary-300 caret-white "
                        : "text-white caret-black"
                    } min-w-0`}
                    style={{ width: inputRef.current ? inputRef.current.value.length + 'ch' : 'auto' }}
                    spellCheck={false}
                  />

                  <span
                    className={`${
                      blinkingTrue ? "animate-blink" : ""
                    } absolute text-sm scale-90 inset-y-0 -right-2 flex items-center  pr-2 ${
                      terminalTheme
                        ? "bg-secondary-300 border-secondary-300"
                        : "bg-white border-white"
                    }`}
                  />
                </div>
                {/* <span
                  ref={spanRef}
                  className="absolute text-sm invisible whitespace-pre"
                >
                  {input}
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
