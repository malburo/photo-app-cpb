import SendIcon from '@material-ui/icons/Send';
import InputField from 'form-controls/InputField';
import { useForm } from 'react-hook-form';

const CommentForm = ({ onSubmitComment }) => {
  const form = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: { content: '' },
  });
  const handleSubmit = (values) => {
    if (values.content === '') {
      return;
    }
    onSubmitComment(values);
    form.reset();
  };
  return (
    <form id="hook-form" onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="content" iconRight={<SendIcon />} placeholder="Comment..." form={form} />
    </form>
  );
};

export default CommentForm;
