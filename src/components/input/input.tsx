import styles from "./input.module.scss";
interface InputProps {
  title?: string;
  placeholder: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  errorText?: string;
  textarea?: boolean;
  className?: string;
  id?: string;
  type: string;
  //   onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  // ref: LegacyRef<HTMLInputElement | null>;
}

const Input = (props: InputProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{props.title}</div>
      <input className={styles.input} {...props} onChange={props.onChange}/>
      {props.errorText && (
        <div className={styles.errorText}>{props.errorText}</div>
      )}
    </div>
  );
};
export default Input;
