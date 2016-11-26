class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: null,
            count: 0,
        };
    }

    componentDidMount() {
        const timer = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            });
        }, 500);

        this.setState({ timer });
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    render() {
        return (
            <div>
                <h1>React Fiddle Remote</h1>
                <span>Counter: {this.state.count}</span>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#container'));