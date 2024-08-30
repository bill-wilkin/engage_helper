import { evaluateUrl, handleOperation } from './operation-helpers';
import { 
    setCurrentUrlAction,
    setCurrentOperationAction,
    setCurrentSpaceAction, 
    setCurrentAudienceAction,
    setCurrentTraitsAction,
    setUpdatedTraitsAction
} from '../state-management/actions';

export const handleRequest = async (requestURL, requestBody, getState, dispatch) => {
    
    const { result, isException } = await evaluateUrl();
    if (isException || !result) return;

    const operationResult = handleOperation(requestURL, requestBody, result);
    if (!operationResult) return;

    const { operation, handled } = operationResult;

    const state = getState();

    dispatch(setCurrentUrlAction(result));
    dispatch(setCurrentOperationAction(operation));

    const actionMap = {
        space: () => !state.currentSpace ? setCurrentSpaceAction(handled.space) : null,
        audience: () => !state.currentAudience ? setCurrentAudienceAction(handled.audience) : null,
        traits: () => setCurrentTraitsAction(handled.traits),
        updatedTraits: () => setUpdatedTraitsAction(handled.updatedTraits),
    };

    const actions = Object.entries(actionMap)
        .map(([key, actionCreator]) => (handled[key] !== undefined && actionCreator()) || null)
        .filter(action => action !== null);

    actions.forEach(dispatch);
};