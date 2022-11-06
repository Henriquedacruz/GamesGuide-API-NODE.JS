import React from 'react'
import Card from '../../components/imagens/img';
import './guide.css'


function index(props)  {
  return (
    <div className='container'>
    <> 
      
      <Card />

      <div className='parag1'>
      <text className='text2'>Horizon Zero Dawn é um RPG de mundo aberto original ambientado em um mundo pós-apocalíptico, criado pela
        desenvolvedora holandesa Guerrilla Games.Cheio de missões, missões secundárias, recados e itens colecionáveis, 
        este guia Horizon Zero Dawn abrange o jogo principal, bem como sua expansão Frozen Wilds. Nesta página, listaremos 
        todas as missões do jogo para que você possa verificar seu progresso, bem como dicas e truques para iniciantes para
        o jogo.
        {props.guide}</text>
      </div>

      <div className='parag2'>
      <text className='text3'>
        Também iremos detalhar algumas das atividades de mundo aberto, como Acampamentos de Bandidos, Pescoção e Caldeirões,
        além de revelar a localização de todos os itens colecionáveis, incluindo Recipientes Antigos, Vantagens, Baterias,
        Flores de Metal e Figuras de Banuk.Além disso, este guia apresentará vários guias diversos, como fazer com que todos
        os possíveis aliados opcionais se juntem a Aloy e como conseguir a roupa de Tecelã Escudeira. Observe que, embora
        tenhamos nos empenhado em garantir que os spoilers do Horizon Zero Dawn sejam mínimos, se você é sensível a coisas
        como nomes de missões, convém prosseguir com cautela.
      {props.guide}</text>
      </div>
     
    </>
    </div>
  ) 
}

export default index