import { BaseStore } from 'fluxible/addons';

class ExampleStore extends BaseStore {

    constructor(dispatcher) {
        super(dispatcher);
        this.columns = [];
    }

    getColumns() {
        return this.columns;
    }
    handleUpdateList(payload) {
        this.columns = payload;
        this.emitChange();
    }

    dehydrate() {
        return this.getState();
    }

    rehydrate(state) {
        this.columns = state.columns;
    }
}

ExampleStore.storeName = 'ExampleStore';
ExampleStore.handlers = {
    'UPDATE_LIST': 'handleUpdateList'
};

export default ExampleStore;
