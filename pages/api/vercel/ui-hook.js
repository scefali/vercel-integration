const { withUiHook, htm } = require("@zeit/integration-utils");
import Cors from "cors";
import initMiddleware from "../../../lib/init-middleware";

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"],
  })
);

let count = 0;

const handler = async (req, res) => {
	console.log('ehre')
  // Run cors
  await cors(req, res);
	console.log('post')

  return wrapped(req, res);
};

const wrapped = withUiHook(({ payload }) => {
  count += 1;
  return htm`
		<Page>
		<P>Counter: ${count}</P>
			<Button>Count Me hi</Button>
		</Page>
	`;
});

export default handler;
