import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import CustomLayout from '@site/src/theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { Redirect } from '@docusaurus/router';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.location.href = 'https://www.seg2inov.fr';
  }, []);

  return null; // Rien ne s'affichera, juste la redirection
}