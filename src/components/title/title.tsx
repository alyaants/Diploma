import styles from "./title.module.scss";

interface TitleProps {
  title: string;
  className?: string;
}
const Title = (props: TitleProps) => {
  return (
    <div
      className={styles.title}
    >
      {props.title}
    </div>
  );
};
export default Title;