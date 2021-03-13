import image1 from '../../images/svg-1.png';
// import image2 from '../../images/svg-2.png';
import image3 from '../../images/svg-3.png';
import image4 from '../../images/svg-4.png';
// import image5 from '../../images/svg-5.png';


export const homeObjOne = {
    id: 'discover',
    lightBg:false,
    lightText:true,
    lightTextDesc:true,
    topLine:'Premium Bank',
    headline:'Unlimited Transactions with zero fees',
    description:'Get access to our exlusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel:'Get started',
    imgStart:false,
    img: image1,
    alt:'svg',
    dark:true,
    primary:true,
    darkText:false
};
export const homeObjTwo = {
    id: 'about',
    lightBg:true,
    lightText:false,
    lightTextDesc:false,
    topLine:'UNLIMITED ACCESS',
    headline:'Login to your account at any time',
    description:'We have you covered no matter where you are located. All you need is an internet connection and phone or computer.',
    buttonLabel:'Learn More',
    imgStart:true,
    img: image4,
    alt:'savig',
    dark:false,
    primary:false,
    darkText:true
};

export const homeObjThree = {
    id: 'signup',
    lightBg:true,
    lightText:false,
    lightTextDesc:false,
    topLine:'Premium Banl',
    headline:'Creating an account is extremily easy',
    description:"Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go",
    buttonLabel:'Start Now',
    imgStart:false,
    img: image3,
    alt:'paper',
    dark:false,
    primary:false,
    darkText:true
};