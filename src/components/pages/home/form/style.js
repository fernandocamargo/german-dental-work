import styled from 'styled-components';

import { use } from 'helpers/object';
import { Currency, Radio } from 'components/widgets';

const SPLASH_HEIGHT = 267;

const SPLASH_WIDTH = 462;

export default component => styled(component)`
  border-radius: 10px;
  display: block;
  overflow: hidden;
  margin: 39.52px 26px 0 25px;
  padding: ${SPLASH_HEIGHT}px 0 0 0;
  position: relative;
  width: calc(100% - 51px);

  &:before {
    background: #000 center
      url(${process.env.PUBLIC_URL}/assets/images/splash.png) no-repeat;
    background-size: cover;
    content: '';
    display: block;
    height: ${SPLASH_HEIGHT}px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  fieldset > div {
    background-color: #fff;
    width: 100%;
  }

  legend {
    color: #000;
    font-size: 1.5625rem;
    font-weight: 700;
    grid-area: title;
    line-height: 1.8125rem;
    text-align: center;

    span {
      display: block;
    }
  }

  div[aria-roledescription='fields'] {
    align-items: flex-end;
    background-color: #f5f8fa;
    border-radius: 10px;
    grid-area: fields;

    ${Radio} {
      h4:before {
        background-size: cover;
        content: '';
        display: inline-block;
      }

      &[aria-roledescription='number-of-people'] h4:before {
        background-image: url(${process.env.PUBLIC_URL}/assets/svg/number-of-people.svg);
        height: 33px;
        margin-right: 18.26px;
        width: 27px;
      }

      &[aria-roledescription='weekly-recipes'] h4:before {
        background-image: url(${process.env.PUBLIC_URL}/assets/svg/weekly-recipes.svg);
        height: 36px;
        margin-right: 13.72px;
        width: 37px;
      }
    }
  }

  div[aria-roledescription='buttons'] {
    display: flex;
    grid-area: button;

    button {
      background-color: #3bb300;
      border: none;
      border-radius: 50px;
      color: #fff;
      cursor: pointer;
      display: block;
      font-size: 0.9375rem;
      font-weight: 500;
      height: 43px;
      line-height: 1.125rem;
      padding: 3px 13px;
      width: 100%;
    }
  }

  dl {
    grid-area: price;

    dt {
      color: #61696f;
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.0625rem;
      text-transform: uppercase;
    }

    dd {
      color: #ff5c26;
      font-size: 2.125rem;
      font-weight: 500;
      line-height: 2.5625rem;

      ${Currency} {
        display: flex;

        span[aria-roledescription='currency'] {
          font-size: 1.125rem;
        }
      }
    }
  }

  ${use('theme.breakpoints.tablet')} {
    margin-left: 0;
    margin-right: 0;
    width: auto;

    fieldset > div {
      display: grid;
      grid-template-areas:
        'title title'
        'fields fields'
        'price button';
      padding: 24.48px 51px 39.86px 51px;
      width: 639px;
    }

    div[aria-roledescription='fields'] {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 39.52px 0 32.15px 0;
      padding: 27.48px 0 32.98px 0;
    }

    div[aria-roledescription='buttons'] {
      align-items: flex-end;
      justify-content: flex-end;

      button {
        width: 366px;
      }
    }
  }

  ${use('theme.breakpoints.desktop')} {
    padding: 0 0 0 ${SPLASH_WIDTH}px;

    &:before {
      height: 100%;
      width: ${SPLASH_WIDTH}px;
    }
  }
`;
