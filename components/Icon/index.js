/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import React, { useEffect, useRef, memo } from 'react';
import axios from '../../lib/axios';
import styles from './Icon.module.scss';

const Icon = ({ socialLink, variant, className }) => {
  const iconRef = useRef();

  useEffect(() => {
    const loadSvg = async () => {
      const res = await axios.get(socialLink.icon.url, {
        responseType: 'text',
      });
      while (iconRef.current.hasChildNodes()) {
        iconRef.current.removeChild(iconRef.current.firstChild);
      }
      iconRef.current.insertAdjacentHTML('beforeend', res.data);
    };

    loadSvg();
  }, []);
  return (
    <a
      rel="noreferrer"
      aria-label="button"
      href={socialLink.url}
      target="_blank"
      role="button"
      className={`${styles[variant]} ${className}`}
      ref={iconRef}>
      socialIcons
    </a>
  );
};

Icon.propTypes = {
  variant: PropTypes.oneOf(['iconBtn', 'serviceBtn', 'searchIcon']),
};

export default memo(Icon);
