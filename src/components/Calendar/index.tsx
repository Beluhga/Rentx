import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {Calendar as CustomCalendar, LocaleConfig} from 'react-native-calendars';


 LocaleConfig.locales['pt-br'] = {
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
    dayNamesShort: ['DOM', 'SEG', 'TER', 'QUAR', 'QUI', 'SEX', 'SAB'],
    today: 'Hoje'
 }

export function Calendar(){
  const theme = useTheme();
return (
 <CustomCalendar
   
    renderArrow={(direction) => /*função para mudar a seta do calendario de acordo com a data */
     <Feather
       name={direction == 'left' ? "chevron-left" : "chevron-right"}
       size={24}
       color={theme.colors.shape} 
     />
    }

    headerStyle={{
        /* para modificar a parte acima dos dias e abaixo da semana */
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_detail,
        paddingBottom: 10,
        marginBottom: 10,
    }}

    theme={{
        /*mudando a font do dia e mes*/
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_500,
        textMonthFontFamily: theme.fonts.secondary_600,
        textDayHeaderFontSize: 10,
        textMonthFontSize: 20,
        monthTextColor: theme.colors.title,
        arrowStyle: {
            marginHorizontal: -15
        }
    }}

    firstDay={1}
    minDate={String(new Date())}
    />
  );
}