const { withUiHook, htm } = require("@zeit/integration-utils");

let count = 0;

export default withUiHook(({ payload }) => {
  count += 1;
  return htm`
		<Page>
		<P>Counter: ${count}</P>
			<Button>Count Me</Button>
		</Page>
	`;
});
