import React, { useState } from "react";
import styles from "./tabs.module.scss";
import classNames from "classnames";

export interface Tab {
  title: string;
  content: JSX.Element;
  active?: boolean;
}

interface TabsProps {
  tabs: Tab[];
  active?: boolean;
}

const Tabs = (props:TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className={styles.tabs}>
      <div className={styles.tabsButtons}>
        {props.tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={classNames(styles.tab, {
              [styles.active]: props.active,
            })}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className={styles.tabsContent}>{props.tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;

// // Пример использования компонента Tabs
// const App = () => {
//   const tabs = [
//     { title: 'Tab 1', content: <div>Content for Tab 1</div> },
//     { title: 'Tab 2', content: <div>Content for Tab 2</div> },
//     { title: 'Tab 3', content: <div>Content for Tab 3</div> },
//   ];

//   return (
//     <div className="app">
//       <h1>Tabs Example</h1>
//       <Tabs tabs={tabs} />
//     </div>
//   );
// };

// export default App;
