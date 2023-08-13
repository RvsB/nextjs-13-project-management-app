import AuthForm from "@/components/AuthForm";

type Props = {};
const SignIn = (props: Props) => {
  return (
    <div>
      <AuthForm mode="signin" />
    </div>
  );
};
export default SignIn;
