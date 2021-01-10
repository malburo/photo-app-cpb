import SearchIcon from '@material-ui/icons/Search';
import InputField from 'form-controls/InputField';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const SearchForm = () => {
  const history = useHistory();
  const form = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      search: '',
    },
  });
  const onSubmit = (values) => {
    history.push(`/search/photos?fullname=${values.search}`);
  };
  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <InputField name="search" placeholder="Search..." size="small" icon={<SearchIcon />} form={form} />
    </form>
  );
};

export default SearchForm;
