import DateTime from '../DateTime/DateTime'

function withPretty(DateTime){
    return class extends React.Component {
        state = {
            date: props.date
        }

        calcHours = () => {
            let format = 'YYYY-MM-DD hh:mm:ss';
    
            //let curTime = moment();
            let loadTime = moment(this.state.date,format);
    
            return loadTime.fromNow();
        }

        render() {
            <div>
                <p>{this.calcHours()}</p>
            </div>
        }
    }
}

export default withPretty;