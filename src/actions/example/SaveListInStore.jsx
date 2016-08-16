export default function SaveListInStore(context, list) {
    context.dispatch('UPDATE_LIST', list);
}
