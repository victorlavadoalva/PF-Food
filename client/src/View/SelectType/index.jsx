import * as React from 'react';
import styles from "./styles.module.css"

export default function UserType() {
  return (
    <div className={styles.container}>
                <ul>
                    <li>
                        <button>Cliente</button>
                    </li>
                    <li>
                        <button>Restaurante</button>
                    </li>
                </ul>
    </div>
  );
}