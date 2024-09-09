import { createGlobalStyle } from 'styled-components'

export const AppColorStyle = createGlobalStyle`
:root {
    .bg-light-green {
        background-color:#A8BBA0 ;
    }
    .fc-light-green {
        color:#A8BBA0 ;
    }

    .bg-dark-gray{
        background-color: #323131;
    }
    .fc-dark-gray{
        color:#323131
    }

    .bg-middle-gray{
        background-color: #A3A1A1;
    }
    .fc-middle-gray{
        color: #A3A1A1;
    }

    .bg-light-gray{
        background-color: #E5E6E5;
    }
    .fc-light-gray{
        color:#E5E6E5;
    }

    .bg-white-gray{
        background-color:#F4F4F4 ;
    }
    .fc-white-gray{
        color: #F4F4F4;
    }

    .bg-white {
        background-color: #FFFFFF;
    }
    .fc-white{
        color: #FFFFFF;
    }

    .bg-black{
        background-color: #000000;
    }
    .fc-black{
        color: #000000;
    }
}
`

export const AppColorTokens = {
    LIGHT_GREEN:{
        hex:'A8BBA0'
    },
    DARK_GRAY:{
        hex:'323131'
    },
    MIDDLE_GRAY:{
        hex:'A3A1A1'
    },
    LIGHT_GRAY:{
        hex:'E5E6E5'
    },
    WHITE_GRAY:{
        hex:'F4F4F4'
    },
    WHITE:{
        hex:'FFFFFF'
    },
    BLACK:{
        hex:'000000'
    }
}