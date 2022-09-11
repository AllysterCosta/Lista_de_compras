
var lista_sup = [];

function lista_compras(){
    const lista = Number(prompt('O que você deseja fazer?\n 1 - Adiocinar item\n 2 - Excluir item \n 3 - Verificar items da lista'));
    let produto;
    if(!lista || lista >= 4 || lista <= 0){
        alert('Erro - Opção invalida!');
        lista_compras();
    }
    switch (lista){
        case 1: 
            adiciona_item();
            break;
        case 2:
            remove_item();
            break;
        case 3:
            lista_itens();
            break;
        default:
            lista_compras();
    }

    function adiciona_item(){
        produto = String(prompt('Insira um produto: '))
        lista_sup.push(produto);
        alert(`Item ${produto} foi adiocionado a sua lista!`)
        lista_compras();
    }
    function remove_item(){
        if(lista_sup.length <= null){
            alert('Sua lista está vazia por gentileza adicione itens.');
            lista_compras();
        }else{
            alert('Sua lista de compras possui os itens:\n');
            alert(lista_sup);
            produto = String(prompt('Qual produto deseja remover: '));
            let index_produto = lista_sup.indexOf(produto);
            let verificando_produto = lista_sup.includes(produto)
            if(produto == ''){
                alert('Erro - Produto vazio');
                remove_item();
            }else if(verificando_produto == false){
                alert('Produto não exitente na lista!\nPor gentileza verifique a lista para remover um item.');
                remove_item();
            }else{
                lista_sup.splice(index_produto, 1);
                alert(`O item ${produto} foi removido da sua lista.`);
                lista_itens();
            }
            
            
            
        }
        
    }
    function lista_itens(){
        if(lista_sup.length <= null){
            alert('Sua lista está vazia por gentileza adicione itens.');
            lista_compras();
        }else{
            alert('Sua lista atualizada, possui os itens:\n');
            alert(lista_sup);
            lista_compras();
        }
        
    }
}

lista_compras();

