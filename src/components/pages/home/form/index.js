import { arrayOf, func, number, string } from 'prop-types';
import React from 'react';

import { Currency, Radio } from 'components/widgets';

import withStyle from './style';

export const Form = ({
  className,
  numberOfPeopleOptions,
  numberOfPeople,
  changeNumberOfPeople,
  weeklyRecipesOptions,
  weeklyRecipes,
  changeWeeklyRecipes,
  price,
}) => (
  <form className={className}>
    <fieldset>
      <div>
        <legend>
          <span>Gostou e ainda não é assinante? </span>
          <span>Escolha já um plano semanal!</span>
        </legend>
        <div aria-roledescription="fields">
          <Radio
            name="number-of-people"
            options={numberOfPeopleOptions}
            value={numberOfPeople}
            onChange={changeNumberOfPeople}
          >
            Receita para quantas pessoas?
          </Radio>
          <Radio
            name="weekly-recipes"
            options={weeklyRecipesOptions}
            value={weeklyRecipes}
            onChange={changeWeeklyRecipes}
          >
            Quantas receitas por semana?
          </Radio>
        </div>
        <dl>
          <dt>Preço do kit por semana</dt>
          <dd>
            <Currency>{price}</Currency>
          </dd>
        </dl>
        <div aria-roledescription="buttons">
          <button type="submit">Quero assinar agora!</button>
        </div>
      </div>
    </fieldset>
  </form>
);

Form.propTypes = {
  className: string.isRequired,
  numberOfPeopleOptions: arrayOf(number.isRequired),
  numberOfPeople: number.isRequired,
  changeNumberOfPeople: func.isRequired,
  weeklyRecipesOptions: arrayOf(number.isRequired),
  weeklyRecipes: number.isRequired,
  changeWeeklyRecipes: func.isRequired,
  price: string.isRequired,
};

Form.defaultProps = {
  numberOfPeopleOptions: [],
  weeklyRecipesOptions: [],
};

export default withStyle(Form);
