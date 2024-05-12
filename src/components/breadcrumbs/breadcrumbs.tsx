import React from "react";
import styles from "./breadcrumbs.module.scss";

interface BreadcrumbsProps {
  paths: string[];
  onBack?: () => void;
}

const Breadcrumbs = (props: BreadcrumbsProps) => {
  return (
    <div className={styles.breadcrumbs}>
      {props.paths.map((path, index) => (
        <span key={index} onClick={props.onBack}>
          {path}
          {index < props.paths.length - 1 && <span> / </span>}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
