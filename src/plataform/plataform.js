// Setando a rota de acordo com o menu
function setRouter(_router)
{
    let router;
    switch (_router) {
        case 'motivation':
            router = './pages/motivations/motivations.html';
            setItemActive('motivation');
            removeItemActive('diary');
            removeItemActive('control');
            break;
        case 'control':
            router = './pages/control/control.html';
            setItemActive('control');
            removeItemActive('diary');
            removeItemActive('motivation');
            break;
        case 'profile':
            router = './pages/profile/profile.html';
            removeItemActive('control');
            removeItemActive('diary');
            removeItemActive('motivation');
            break;
        default:
            router = './pages/diary/diary.html';
            setItemActive('diary');
            removeItemActive('motivation');
            removeItemActive('control');
            break;
    }
    
    document.getElementById('routers').src = router;
}

// Add a classe 'hide' no item informado para remover a visualização da tela
function removeItemActive(_item)
{
    document.getElementById(`border-menu-` + _item).className = 'hide';
    document.getElementById(`title-active-` + _item).classList.remove('active');
}

// Remove a classe 'hide' e seta a classe 'border-active' para mostrar o item informado na tela
function setItemActive(_item)
{
    document.getElementById(`border-menu-` + _item).classList.remove('hide');
    document.getElementById(`border-menu-` + _item).className = 'border-active';
    document.getElementById(`title-active-` + _item).className = 'active';
}
