import React from 'react';
import getCharaterByName from './services/characters/getCharacterByName';
import DOMPurify from 'dompurify';
import { format } from 'date-fns';
import '../src/components/atoms/input/Input';
import { Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import Input from '../src/components/atoms/input/Input';
import FormGroup from '../src/components/atoms/formGroup/FormGroup';
import Label from './components/atoms/label/Label';
import { formatDate } from './converters/date';
import Characters from './containers/Characters/Characters';
import ChararacterListItem from './components/molecules/CharaterListItem/CharaterListItem';
import { parseAliases } from './converters/aliases';
import Selector from './components/atoms/selector/Selector'
import CharacterList from './components/organisms/CharacterList/CharacterList';

const App = () => {

   const [character, setCharacter] = React.useState(null)

   const validationSchema = Yup.object().shape({
      email: Yup.string().required('This field is required'),
      favorite: Yup.boolean()
   });

   interface FormValues {
      email: string,
      favorite: false
      animals: string
   }

   React.useEffect(() => {
      getCharaterByName("batman", 10, 0).then(result => {
         setCharacter(result.data.results[0])
      });

   }, []);


   return <div data-testid="app">

      <p>{character && DOMPurify.sanitize(character?.aliases)}</p>
      <Formik
         initialValues={{ email: '', favorite: false, animals: '' }}
         onSubmit={(values) => {
            console.log(values);
         }}
         validationSchema={validationSchema}>
         {
            (props: FormikProps<FormValues>) => {
               return (
                  <FormGroup>
                     <CharacterList />

                     <Label text="Email" forInput="email" />
                     <Input
                        type="text"
                        placeholder="Email"
                        name="email"
                        invalid={props.errors.email && props.touched.email}
                     />
                     <Selector<string>
                        name="animals"
                        options={
                           [
                              'wolf',
                              'lion',
                              'seal',
                              'parrot',
                              'squirrel',
                              'dog',
                              'cat'
                           ]
                        }
                        labelText="Animals"
                     />


                  </FormGroup>

               )
            }
         }
      </Formik>
   </div >;
}

export default App;