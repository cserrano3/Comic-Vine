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
import ChararacterListItem from './components/organisms/CharaterListItem/CharaterListItem';
import { parseAliases } from './converters/aliases';
import Selector from './components/atoms/selector/Selector'

const App = () => {

   const [character, setCharacter] = React.useState(null)

   const validationSchema = Yup.object().shape({
      email: Yup.string().required('This field is required'),
      favorite: Yup.boolean()
   });

   interface FormValues {
      email: string,
      favorite: false
   }

   React.useEffect(() => {
      getCharaterByName("batman", 10, 0).then(result => {
         console.log('result ---------- ', result)
         console.log(result.data.results[0])
         setCharacter(result.data.results[0])
      });

   }, []);


   return <div data-testid="app">

      <p>{character && DOMPurify.sanitize(character?.aliases)}</p>
      <Characters />
      <Formik
         initialValues={{ email: '', favorite: false }}
         onSubmit={(values) => {
            console.log(values);
         }}
         validationSchema={validationSchema}>
         {
            (props: FormikProps<FormValues>) => {
               return (
                  <FormGroup>
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
                     <div style={{ maxWidth: '500px' }}>
                        {
                           character && <ChararacterListItem
                              imageURL={character.image.medium_url}
                              name={character.name}
                              birth={formatDate(character.birth)}
                              realName={character.real_name}
                              gender={character.gender}
                              aliases={parseAliases(character.aliases)}
                           />
                        }
                     </div>


                  </FormGroup>

               )
            }
         }
      </Formik>
   </div >;
}

export default App;