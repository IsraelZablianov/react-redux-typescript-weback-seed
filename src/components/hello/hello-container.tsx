import { EnthusiasmActions, incrementEnthusiasm, decrementEnthusiasm } from './hello-actions';
import { connect, Dispatch } from 'react-redux';
import { StoreState } from '../../reducer/store-type';
import Hello, { HelloBaseProps, HelloDispatchProps, HelloStateProps } from "./hello";

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
  return {
    enthusiasmLevel,
    name: languageName,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<EnthusiasmActions>) {
  return {
    onIncrement: () => dispatch(incrementEnthusiasm()),
    onDecrement: () => dispatch(decrementEnthusiasm()),
  };
}

export default connect<HelloStateProps, HelloDispatchProps, HelloBaseProps>(mapStateToProps, mapDispatchToProps)(Hello);
