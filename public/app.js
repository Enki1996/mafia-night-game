(() => {
  'use strict';
  const translations = {
    en: {
      subtitle: 'THE SOCIAL DEDUCTION EXPERIENCE', live:'Live room', offline:'Disconnected',
      enter:'Enter the underworld.', hero:'Secrets on screen. Suspicions in person.',
      heroText:'A digital companion for your real-life Mafia nights. Random roles, private actions, and a narrator who knows everything. The arguments stay in the room.',
      privateRoles:'Secret roles', instantSync:'Live sync', realVotes:'Face-to-face voting',
      createRoom:'Create room', joinRoom:'Join room', startParty:'Your night starts here', entryDesc:'One narrator. Your whole squad. Zero forgotten actions.',
      name:'Your name', narratorName:'Narrator name', namePlaceholder:'What should we call you?', roomCode:'6-character room code',
      codePlaceholder:'e.g. A7B9K2', becomeNarrator:'Become Narrator', joinSquad:'Enter the room',
      noDownload:'No downloads', privateByDefault:'Private by design',
      lobby:'The lobby', lobbyDesc:'Gather your squad. The narrator starts when everybody is here.',
      waitingPlayers:'Waiting for players', players:'Players', invite:'Invite the squad', shareThis:'Share this link or room code',
      copyCode:'Copy code', copyLink:'Copy invite link', shareInvite:'Share invite', gameSetup:'Game setup',
      mafiaCount:'Mafia members', mafiaHint:'Choose the number of hidden Mafia players.', doctor:'Doctor', doctorHint:'Can save one person each night.',
      detective:'Detective', detectiveHint:'Can inspect a player each night.',
      startGame:'Deal secret roles & start', minPlayers:'At least 4 players are required to start.',
      narratorWillStart:'The narrator will begin after everyone joins.', playersJoined:'players joined', remove:'Remove',
      ready:'Ready to play', leave:'Leave on this device',
      role:'Your secret role', hideRole:'Hide role', revealRole:'Reveal my role',
      secretRole:'TOP SECRET', doNotShow:'Make sure nobody is looking at your phone.',
      mafia:'Mafia', doctorRole:'Doctor', detectiveRole:'Detective', citizen:'Citizen',
      mafiaDesc:'Choose someone to eliminate tonight. Keep your identity secret.',
      doctorDesc:'Protect one player from the Mafia attack. You may choose yourself.',
      detectiveDesc:'Investigate one player to learn whether they are Mafia.',
      citizenDesc:'You have no night action. Watch carefully and trust nobody.',
      partners:'Your Mafia teammates', night:'Night', day:'Discussion', dayComplete:'Day finished', finished:'Game over',
      round:'Round', nightActions:'Secret actions', yourMission:'Choose your target',
      chooseOne:'Tap one living player below.', submitAction:'Submit secret action', updateAction:'Change my action',
      actionSaved:'Action submitted', canChange:'You can change your selection until the narrator begins discussion.',
      awaitingNarrator:'Waiting for the narrator to begin discussion.', noNightAction:'No night action for your role.',
      eliminated:'You are eliminated', eliminatedDesc:'You can follow the game, but you cannot take new actions or vote.',
      nightInProgress:'Night in progress', discussionNow:'The discussion is live',
      nightDone:'Everyone has submitted their actions.',
      actionsSent:'Actions received', waitingSecret:'Actions are hidden until every active role has submitted.',
      seeAction:'Submitted secret actions', notSubmitted:'Not submitted',
      doctorProtect:'Protect', mafiaTarget:'Target', detectiveInspect:'Investigate',
      beginDiscussion:'Resolve night & begin discussion', forceResolve:'Proceed with missing actions',
      forceConfirm:'Some players have not submitted. Continue anyway? Missing actions will be skipped.',
      narratorOnly:'NARRATOR CONTROL ROOM', fullRoster:'Secret role ledger',
      nightOutcome:'Night outcome', saved:'Protected by the Doctor — nobody died.',
      noKill:'Nobody was killed tonight.', mafiaTie:'Mafia votes were tied — nobody died.',
      killed:'was killed during the night.',
      investigated:'Detective investigated', isMafia:'is Mafia', notMafia:'is NOT Mafia',
      stillWaiting:'Still waiting on secret actions.', votingInPerson:'Accusations and voting happen face-to-face. No digital votes.',
      verdict:'Record the group verdict', verdictDesc:'After finger voting and the defense speech, record the player eliminated by the group.',
      voteEliminate:'Record elimination', nobodyEliminated:'Nobody eliminated',
      confirmEliminate:'Confirm this player was eliminated by the in-person vote?',
      confirmSkip:'Confirm the group eliminated nobody?',
      roundComplete:'The round is complete.', nextNight:'Begin next night',
      publicEvents:'Public round history', noEvents:'Results will appear here after the first night.',
      mafiaWins:'MAFIA WINS', townWins:'CITIZENS WIN',
      mafiaWinsText:'The Mafia controls the room. The city has fallen.',
      townWinsText:'Every Mafia member has been found. The city is safe.',
      replay:'Play again in this room', revealAll:'Final role reveal',
      roleWaiting:'Waiting for the roles to be dealt.', revealResult:'Your investigation result',
      stayQuiet:'Keep your role hidden. Let the accusations begin.',
      nextRoundWaiting:'The narrator will start the next night.',
      spectators:'Spectators', alive:'Alive', dead:'Out', yourself:'(you)',
      confirmReset:'Start a new game with the same players? Current game results will be cleared.',
      confirmLeave:'Leave this room on your device? Your name may remain in the room.',
      waitingHost:'Waiting for the narrator', rosterRole:'Role',
      roomClosed:'Could not reconnect to this room.',
      roundSummary:'Round recap', allRoles:'All roles',
      copyDone:'Copied!', invalidForm:'Please complete the fields.',
      mafiaTieHint:'If Mafia votes disagree and tie, no kill occurs.',
      privacy:'Your role is visible only to you and the narrator.',
      referee:'The narrator handles the rules. The squad handles the drama.',
      noOne:'Nobody', about:'Mafia Nights · Online v2.0',
      offlineMode:'Reconnecting…', nobodyTarget:'No target selected',
      pending:'Pending', locked:'Submitted', info:'Room settings',
      how:'How it works', howText:'Use phones for roles and secret night actions. Debate, raise fingers, and defend yourselves in person.',
      sessionExpired:'Your session is no longer valid.',
      gameStarted:'The narrator has dealt the roles.',
      morePlayers:'Waiting for more players…', readyForAction:'Your role is ready.',
      viewRoleFirst:'Reveal your secret role to see your action.',
      hideNow:'Hide before passing your phone.',
      ownerOnly:'The narrator can manage this room from their device.',
      submittedOf:'submitted',
      changeLanguage:'Switch language', enterIp:'Your computer’s local Wi-Fi IP (find it using ipconfig)',
      localTip:'For phone invites, use your computer’s Wi-Fi address, not localhost.',
    },
    ar: {
      subtitle:'لعبة كشف الخداع', live:'غرفة مباشرة', offline:'غير متصل',
      enter:'ادخل عالم المافيا.', hero:'الأسرار بالموبايل. والاتهامات عالواقع.',
      heroText:'مساعد رقمي للعبة المافيا ويّا جماعتك. أدوار عشوائية، حركات سرية، وراوي يعرف كلشي. أما النقاشات والاتهامات فتبقى بيناتكم.',
      privateRoles:'أدوار سرية', instantSync:'تحديث مباشر', realVotes:'تصويت وجهاً لوجه',
      createRoom:'إنشاء غرفة', joinRoom:'دخول غرفة', startParty:'سهرتكم تبدأ من هنا', entryDesc:'راوي واحد. كل جماعتكم. ولا حركة تننسي.',
      name:'اسمك', narratorName:'اسم الراوي', namePlaceholder:'شلون نناديك؟', roomCode:'رمز الغرفة من 6 خانات',
      codePlaceholder:'مثلاً A7B9K2', becomeNarrator:'صير الراوي', joinSquad:'ادخل الغرفة',
      noDownload:'بدون تنزيل', privateByDefault:'أدوار مخفية',
      lobby:'غرفة الانتظار', lobbyDesc:'اجمع جماعتك. الراوي يبدي من يصير الكل حاضر.',
      waitingPlayers:'بانتظار اللاعبين', players:'لاعبين', invite:'ادعُ جماعتك', shareThis:'شارك الرابط أو رمز الغرفة',
      copyCode:'نسخ الرمز', copyLink:'نسخ رابط الدعوة', shareInvite:'مشاركة الدعوة', gameSetup:'إعدادات اللعبة',
      mafiaCount:'عدد المافيا', mafiaHint:'حدد عدد لاعبي المافيا.', doctor:'الطبيب', doctorHint:'يحمي شخص واحد كل ليلة.',
      detective:'المحقق', detectiveHint:'يكشف هوية لاعب كل ليلة.',
      startGame:'توزيع الأدوار وبدء اللعبة', minPlayers:'تحتاجون 4 لاعبين على الأقل حتى تبدون.',
      narratorWillStart:'الراوي يبدي من يدخل الكل.', playersJoined:'لاعبين دخلوا', remove:'إزالة',
      ready:'جاهزين', leave:'الخروج من هذا الجهاز',
      role:'دورك السري', hideRole:'إخفاء الدور', revealRole:'اكشف دوري',
      secretRole:'سري للغاية', doNotShow:'تأكد محد دا يشوف شاشة موبايلك.',
      mafia:'المافيا', doctorRole:'الطبيب', detectiveRole:'المحقق', citizen:'المواطن',
      mafiaDesc:'اختار شخص تتخلص منه الليلة، وخلي هويتك سرية.',
      doctorDesc:'احمِ لاعب من هجوم المافيا. تكدر تختار نفسك.',
      detectiveDesc:'حقق ويا لاعب حتى تعرف إذا هو مافيا لو لا.',
      citizenDesc:'ما عندك حركة ليلية. راقب زين ولا تثق بأحد.',
      partners:'زملائك بالمافيا', night:'الليل', day:'مرحلة الاتهامات', dayComplete:'انتهى النهار', finished:'انتهت اللعبة',
      round:'الجولة', nightActions:'الحركات السرية', yourMission:'اختار هدفك',
      chooseOne:'اختار لاعب حي من القائمة.', submitAction:'إرسال الحركة السرية', updateAction:'تغيير حركتي',
      actionSaved:'تم إرسال الحركة', canChange:'تكدر تغير اختيارك لحد ما الراوي يبدي النقاش.',
      awaitingNarrator:'بانتظار الراوي حتى يبدي الاتهامات.', noNightAction:'دورك ما عنده حركة بالليل.',
      eliminated:'طلعت من اللعبة', eliminatedDesc:'تكدر تتابع اللعبة، بس ما تگدر تسوي حركات جديدة أو تصوت.',
      nightInProgress:'الليل مستمر', discussionNow:'بدأت مرحلة الاتهامات',
      nightDone:'كل اللاعبين أرسلوا حركاتهم.',
      actionsSent:'الحركات المستلمة', waitingSecret:'الحركات تبقى مخفية لحد ما كل أصحاب الأدوار يرسلون.',
      seeAction:'الحركات السرية المرسلة', notSubmitted:'ما أرسل',
      doctorProtect:'حماية', mafiaTarget:'استهداف', detectiveInspect:'تحقيق',
      beginDiscussion:'حسم الليل وبدء الاتهامات', forceResolve:'تجاوز الحركات الناقصة',
      forceConfirm:'بعض اللاعبين ما أرسلوا حركاتهم. نكمل ونعتبر حركاتهم ملغية؟',
      narratorOnly:'لوحة تحكم الراوي', fullRoster:'سجل الأدوار السري',
      nightOutcome:'نتيجة الليل', saved:'الطبيب أنقذ المستهدف — محد مات.',
      noKill:'محد انقتل هالليلة.', mafiaTie:'أصوات المافيا تعادلت — محد مات.',
      killed:'انقتل خلال الليل.',
      investigated:'المحقق فحص', isMafia:'مافيا', notMafia:'مو مافيا',
      stillWaiting:'ننتظر باقي الحركات السرية.', votingInPerson:'الاتهامات ورفع الأصابع والتصويت تصير وجهاً لوجه. ماكو تصويت إلكتروني.',
      verdict:'سجل قرار الجماعة', verdictDesc:'بعد التصويت والدفاع عن النفس، سجل اللاعب اللي قررت الجماعة تطلعه.',
      voteEliminate:'تسجيل الإقصاء', nobodyEliminated:'محد ينقصى',
      confirmEliminate:'متأكد الجماعة قررت إقصاء هذا اللاعب؟',
      confirmSkip:'متأكد الجماعة قررت ما تقصي أي أحد؟',
      roundComplete:'خلصت الجولة.', nextNight:'ابدأ الليلة الجاية',
      publicEvents:'أحداث الجولات', noEvents:'تظهر النتائج هنا بعد أول ليلة.',
      mafiaWins:'المافيا فازت', townWins:'المواطنين فازوا',
      mafiaWinsText:'المافيا سيطرت على اللعبة.', townWinsText:'تم اكتشاف جميع أفراد المافيا.',
      replay:'نلعب مرة ثانية بنفس الغرفة', revealAll:'كشف الأدوار النهائية',
      roleWaiting:'بانتظار توزيع الأدوار.', revealResult:'نتيجة تحقيقك',
      stayQuiet:'خلي دورك سري وخلي الاتهامات تبدي.',
      nextRoundWaiting:'الراوي راح يبدي الليلة الجاية.',
      spectators:'المقصيين', alive:'باللعبة', dead:'مقصي', yourself:'(إنت)',
      confirmReset:'نبدأ لعبة جديدة بنفس اللاعبين؟ راح تنمسح نتائج اللعبة الحالية.',
      confirmLeave:'تريد تطلع من الغرفة بهذا الجهاز؟ اسمك ممكن يبقى بالغرفة.',
      waitingHost:'بانتظار الراوي', rosterRole:'الدور',
      roomClosed:'ما كدرنا نتصل بالغرفة مرة ثانية.',
      roundSummary:'ملخص الجولة', allRoles:'كل الأدوار',
      copyDone:'تم النسخ!', invalidForm:'كمل الخانات المطلوبة.',
      mafiaTieHint:'إذا تعادلت أصوات المافيا على أكثر من هدف، ما تصير قتلة.',
      privacy:'دورك ما يبين إلا إلك وللراوي.',
      referee:'الراوي يدير القوانين، وأنتم عليكم الحچي والمشاكل.',
      noOne:'لا أحد', about:'مافيا هايبرد · نسخة 1.0',
      offlineMode:'جاري إعادة الاتصال…', nobodyTarget:'لم يتم اختيار هدف',
      pending:'بانتظار', locked:'أرسل', info:'إعدادات الغرفة',
      how:'شلون نلعب؟', howText:'الموبايلات للأدوار والحركات السرية. النقاش والاتهامات ورفع الأصابع والدفاع تصير بالواقع.',
      sessionExpired:'جلسة دخولك ما عادت صالحة.',
      gameStarted:'الراوي وزع الأدوار.',
      morePlayers:'بانتظار باقي اللاعبين…', readyForAction:'دورك صار جاهز.',
      viewRoleFirst:'اكشف دورك السري حتى تشوف حركتك.',
      hideNow:'اخفي الشاشة قبل لا يشوفها أحد.',
      ownerOnly:'الراوي يتحكم بالغرفة من جهازه.',
      submittedOf:'مرسل',
      changeLanguage:'تغيير اللغة', enterIp:'عنوان الـ IP للموبايلات بنفس الواي فاي (من ipconfig)',
      localTip:'حتى يفتح الرابط بالموبايل، استخدم IP الكمبيوتر مو localhost.',
    }
  };
  const state = {
    lang: localStorage.getItem('mafia_lang') || 'ar',
    entryMode: new URLSearchParams(location.search).get('room') ? 'join' : 'create',
    session: null, room: null, source: null, connected: false,
    selectedTargetId: null, revealRole: false,
    settings: { mafiaCount: 1, doctor: true, detective: true },
    busy: false, notifyTimer: null
  };
  const roleSymbols = { mafia: '♠', doctor: '✚', detective: '◈', citizen: '♙' };
  const $app = document.getElementById('app');
  const esc = (v) => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const t = (k) => translations[state.lang][k] || translations.en[k] || k;
  const rt = (role) => t({ mafia:'mafia',doctor:'doctorRole',detective:'detectiveRole',citizen:'citizen' }[role] || role);
  const phaseLabel = p => t({lobby:'lobby',night:'night',day:'day','day-complete':'dayComplete',ended:'finished'}[p] || p);
  const nameById = id => (state.room?.players?.find(p => p.id === id)?.name || t('noOne'));
  const em = (role) => ({mafia:'♠',doctor:'✚',detective:'◈',citizen:'♙'}[role]||'•');
  function notify(msg) {
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(state.notifyTimer);
    state.notifyTimer = setTimeout(() => el.classList.remove('show'), 3600);
  }
  function setLang(lang) {
    state.lang = lang; localStorage.setItem('mafia_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = lang === 'ar' ? 'ليالي المافيا · اللعبة الهجينة' : 'Mafia Nights · Hybrid Party Game';
    render();
  }
  function avatar(name) { return `<span class="avatar">${esc((name || '?').trim().charAt(0).toUpperCase())}</span>`; }
  function label(role) { return `<span class="role-label ${esc(role)}">${em(role)} ${esc(rt(role))}</span>`; }
  function button(action, title, classes='btn', attrs='') { return `<button type="button" class="${classes}" data-act="${action}" ${attrs}>${title}</button>`; }
  function header() {
    const inRoom = !!state.room;
    return `<header class="site-header shell">
      <a class="brand" href="/" data-act="home" aria-label="Mafia Nights"><span class="brand-mark">M</span><span>MAFIA <span class="gold-text">NIGHTS</span><small>${esc(t('subtitle'))}</small></span></a>
      <div class="header-right">${inRoom ? `<span class="room-tag"># ${esc(state.room.code)}</span>` : ''}
      ${button('lang',state.lang === 'ar' ? 'EN' : 'عربي','btn ghost',`aria-label="${esc(t('changeLanguage'))}"`)}
      </div></header>`;
  }
  function footer() { return `<footer class="footer shell"><span>${esc(t('about'))}</span><span>${esc(t('referee'))}</span></footer>`; }
  function renderHome() {
    const isJoin = state.entryMode === 'join';
    const preCode = (new URLSearchParams(location.search).get('room') || '').toUpperCase();
    return `<main class="page shell"><div class="home-layout">
      <section class="hero-copy"><div class="eyebrow">✦ ${esc(t('enter'))}</div>
        <h1 class="big-title">MAFIA<br><em>NIGHTS.</em></h1>
        <h2 class="display-title">${esc(t('hero'))}</h2>
        <p>${esc(t('heroText'))}</p>
        <div class="features"><span><b>✦</b>${esc(t('privateRoles'))}</span><span><b>◉</b>${esc(t('instantSync'))}</span><span><b>☝</b>${esc(t('realVotes'))}</span></div>
        <div class="hero-art"><div class="art-halo"></div><div class="floating-card second"><span class="card-suit">A ♠</span><span class="big-suit">♠</span><span class="card-suit">♠ A</span></div><div class="floating-card"><span class="card-suit">M ♠</span><span class="big-suit">♠</span><span class="card-suit">♠ M</span></div></div>
      </section>
      <section class="entry-panel glass"><h2>${esc(t('startParty'))}</h2><p class="subtle">${esc(t('entryDesc'))}</p>
        <div class="entry-choice"><button class="seg ${isJoin?'':'active'}" data-act="entry-create">+ ${esc(t('createRoom'))}</button>
        <button class="seg ${isJoin?'active':''}" data-act="entry-join">↗ ${esc(t('joinRoom'))}</button></div>
        <form data-form="${isJoin?'join':'create'}">
          <div class="field"><label for="playerName">${esc(isJoin?t('name'):t('narratorName'))}</label><input id="playerName" name="name" maxlength="28" minlength="2" autocomplete="nickname" required placeholder="${esc(t('namePlaceholder'))}"></div>
          ${isJoin?`<div class="field"><label for="code">${esc(t('roomCode'))}</label><input class="input-upper" id="code" name="code" autocomplete="off" minlength="6" maxlength="6" required value="${esc(preCode)}" placeholder="${esc(t('codePlaceholder'))}"></div>`:''}
          <button class="btn primary full" type="submit" ${state.busy?'disabled':''}>${esc(isJoin?t('joinSquad'):t('becomeNarrator'))} &nbsp; ⟶</button>
        </form>
        <div class="under-panel"><span>◈ ${esc(t('noDownload'))}</span><span>·</span><span>♧ ${esc(t('privateByDefault'))}</span></div>
      </section>
    </div></main>`;
  }
  function renderIntro() {
    const r = state.room;
    const progress = r.phase === 'lobby' ? t('waitingPlayers') : `${t('round')} ${r.round} · ${phaseLabel(r.phase)}`;
    return `<div class="page-top"><div><div class="eyebrow">${r.me.narrator?esc(t('narratorOnly')):esc(t('readyForAction'))}</div>
      <h1 class="display-title">${r.phase==='lobby'?esc(t('lobby')):esc(phaseLabel(r.phase))}</h1>
      <p>${esc(r.phase==='lobby'?t('lobbyDesc'):r.phase==='night'?t('nightInProgress'):r.phase==='day'?t('discussionNow'):r.phase==='day-complete'?t('roundComplete'):t('finished'))}</p></div>
      <span class="status ${r.phase==='lobby'?'':r.phase==='ended'?'dead':'live'}">${esc(progress)}</span></div>`;
  }
  function renderRoster(withKick) {
    return `<div class="roster">${state.room.players.map(p=>`<div class="person ${p.alive?'':'muted-person'}">
      ${avatar(p.name)}<div class="person-main"><div class="person-name">${esc(p.name)}</div><div class="person-sub">${esc(p.alive?t('alive'):t('dead'))}</div></div>
      ${withKick?button('kick','×','btn ghost xs',`data-id="${p.id}" aria-label="${esc(t('remove'))}"`):''}</div>`).join('')}</div>`;
  }
  function renderLobby() {
    const r = state.room, narrator = r.me.narrator;
    const max = Math.max(1,r.maxMafia||1);
    const n = r.players.length;
    if (state.settings.mafiaCount > max) state.settings.mafiaCount = max;
    if (state.settings.mafiaCount + Number(state.settings.doctor)+Number(state.settings.detective) >= n && n>=4) state.settings.mafiaCount = Math.max(1,n-1-Number(state.settings.doctor)-Number(state.settings.detective));
    return `<main class="page shell">${renderIntro()}<div class="columns">
      <div class="glass panel"><div class="panel-head"><h3>${esc(t('players'))}</h3><span class="pill">${n} / 20</span></div>
        ${n?renderRoster(narrator):`<div class="empty-icon">♙</div><p class="center">${esc(t('morePlayers'))}</p>`}
        <div class="divider"></div><div class="kicker">${esc(t('invite'))}</div>
        <div class="invite"><div><div class="tiny dim">${esc(t('roomCode'))}</div><code dir="ltr">${esc(r.code)}</code></div><div class="share-row">${button('copy-code',t('copyCode'),'btn dark xs')}${button('copy-link',t('copyLink'),'btn gold xs')}${button('share-invite',t('shareInvite'),'btn dark xs')}</div></div>
        <p class="small subtle">${esc(t('shareThis'))}</p>
      </div>
      <aside class="glass panel">${narrator?`
        <h3>${esc(t('gameSetup'))}</h3><div class="setting-row"><div><strong>${esc(t('mafiaCount'))}</strong><span>${esc(t('mafiaHint'))}</span></div><div class="counter">${button('mafia-minus','−','btn ghost xs',state.settings.mafiaCount<=1?'disabled':'')}
        <span>${state.settings.mafiaCount}</span>${button('mafia-plus','+','btn ghost xs',state.settings.mafiaCount>=max?'disabled':'')}</div></div>
        <div class="setting-row"><div><strong>${esc(t('doctor'))}</strong><span>${esc(t('doctorHint'))}</span></div><input class="check" type="checkbox" data-setting="doctor" ${state.settings.doctor?'checked':''}></div>
        <div class="setting-row"><div><strong>${esc(t('detective'))}</strong><span>${esc(t('detectiveHint'))}</span></div><input class="check" type="checkbox" data-setting="detective" ${state.settings.detective?'checked':''}></div>
        <div class="hint-box">✦ ${esc(t('mafiaTieHint'))}</div>
        <div class="actions-row">${button('start',t('startGame'),'btn primary full',n<4?'disabled':'')}</div>
        ${n<4?`<p class="small subtle">${esc(t('minPlayers'))}</p>`:''}
      `:`<div class="center"><div class="empty-icon">⌛</div><h3>${esc(t('waitingHost'))}</h3><p>${esc(t('narratorWillStart'))}</p>
        <div class="role-legend" style="justify-content:center"><span>♠ ${esc(t('mafia'))}</span><span>✚ ${esc(t('doctor'))}</span><span>◈ ${esc(t('detective'))}</span><span>♙ ${esc(t('citizen'))}</span></div></div>`}
        <div class="divider"></div>${button('leave',t('leave'),'btn ghost full')}
      </aside>
    </div></main>`;
  }
  function roleCard(role) {
    if (!state.revealRole) return `<div class="secret-cover"><div class="lock">🔒</div><span class="eyebrow">${esc(t('secretRole'))}</span><p>${esc(t('doNotShow'))}</p>
      ${button('reveal',t('revealRole'),'btn primary')}</div>`;
    const desc = t({mafia:'mafiaDesc',doctor:'doctorDesc',detective:'detectiveDesc',citizen:'citizenDesc'}[role]);
    const mates = role==='mafia' && state.room.me.mafiaTeammates.length ? `<div class="small">${esc(t('partners'))}: <b>${state.room.me.mafiaTeammates.map(p=>esc(p.name)).join(' · ')}</b></div>` : '';
    return `<div class="role-card ${esc(role)}"><span class="eyebrow">${esc(t('role'))}</span><div class="role-icon">${em(role)}</div><h2>${esc(rt(role))}</h2><p>${esc(desc)}</p>${mates}
      ${button('hide',t('hideRole'),'btn dark xs')}</div>`;
  }
  function targetChoices(role) {
    const r = state.room;
    const teammates = new Set(r.me.mafiaTeammates.map(p=>p.id));
    const candidates = r.players.filter(p=>p.alive && (role!=='mafia'|| (p.id!==r.me.id&&!teammates.has(p.id))));
    const selected = state.selectedTargetId || r.me.actionTarget;
    return `<div class="target-list">${candidates.map(p=>`<button class="target ${selected===p.id?'selected':''}" data-act="target" data-id="${p.id}">${avatar(p.name)}<span class="name">${esc(p.name)} ${p.id===r.me.id?esc(t('yourself')):''}</span><span class="dot"></span></button>`).join('')}</div>`;
  }
  function renderNightPlayer() {
    const r = state.room, me = r.me, canAct = ['mafia','doctor','detective'].includes(me.role);
    const progress = r.requiredActions?Math.round(r.submittedActions/r.requiredActions*100):100;
    return `<main class="page shell">${renderIntro()}<div class="columns">
      <div class="glass panel"><div class="content-header"><h3>${esc(t('role'))}</h3><span class="pill">${esc(t('round'))} ${r.round}</span></div>
        ${roleCard(me.role)}<p class="small dim">🔐 ${esc(t('privacy'))}</p></div>
      <aside class="glass panel"><h3>${esc(t('nightActions'))}</h3>
        ${!me.alive?`<div class="empty-icon">☾</div><h3 class="center">${esc(t('eliminated'))}</h3><p class="center">${esc(t('eliminatedDesc'))}</p>`:
          !state.revealRole?`<div class="empty-icon">◈</div><p class="center">${esc(t('viewRoleFirst'))}</p>`:
          !canAct?`<div class="empty-icon">☾</div><h3 class="center">${esc(t('noNightAction'))}</h3><p class="center">${esc(t('awaitingNarrator'))}</p>`:
          `<div class="kicker">${esc(t('yourMission'))}</div><p class="small subtle">${esc(t('chooseOne'))}</p>
           ${targetChoices(me.role)}
           ${me.actionTarget?`<div class="summary-box success"><strong>✓ ${esc(t('actionSaved'))}</strong><p>${esc(nameById(me.actionTarget))} · ${esc(t('canChange'))}</p></div>`:''}
           <div class="actions-row">${button('submit-action',me.actionTarget?t('updateAction'):t('submitAction'),'btn primary full',!(state.selectedTargetId||me.actionTarget)?'disabled':'')}</div>`}
        <div class="divider"></div><div class="kicker">${esc(t('actionsSent'))}</div>
        <div class="progress-track"><div class="progress-fill" style="width:${progress}%"></div></div>
        <p class="small subtle">${r.submittedActions} / ${r.requiredActions} ${esc(t('submittedOf'))}</p>
        <p class="tiny dim">${esc(t('awaitingNarrator'))}</p>
      </aside>
    </div></main>`;
  }
  function ledger() {
    const roles = state.room.roles || [];
    return `<div class="narrator-ledger">${roles.map(p=>`<div class="ledger-line ${p.alive?'':'muted-person'}">${avatar(p.name)}<span class="grow">${esc(p.name)}</span>${label(p.role)}${p.alive?'':'<span class="tiny danger-text">✕</span>'}</div>`).join('')}</div>`;
  }
  function actionLines(acts) {
    if (!acts) return `<div class="notify">🔒 ${esc(t('waitingSecret'))}</div>`;
    return acts.map(a=>`<div class="action-line"><div class="share-row" style="align-items:center">${label(a.role)} <b class="small">${esc(a.name)}</b></div>
    <span class="small ${a.targetId?'gold-text':'dim'}">${a.targetId?`→ ${esc(nameById(a.targetId))}`:esc(t('notSubmitted'))}</span></div>`).join('');
  }
  function renderNightNarrator() {
    const r = state.room, progress=r.requiredActions?Math.round(r.submittedActions/r.requiredActions*100):100;
    return `<main class="page shell">${renderIntro()}<div class="metric-grid"><div class="metric"><strong>${r.players.filter(p=>p.alive).length}</strong><span>${esc(t('alive'))}</span></div><div class="metric"><strong>${r.submittedActions}/${r.requiredActions}</strong><span>${esc(t('actionsSent'))}</span></div><div class="metric"><strong>${r.round}</strong><span>${esc(t('round'))}</span></div></div>
    <div class="columns"><div class="glass panel"><div class="content-header"><h3>${esc(t('seeAction'))}</h3><span class="status ${r.allActions?'live':''}">${esc(r.allActions?t('nightDone'):t('nightInProgress'))}</span></div>
    <div class="progress-track"><div class="progress-fill" style="width:${progress}%"></div></div>
    ${actionLines(r.actions)}
    <div class="actions-row">${button('resolve',t('beginDiscussion'),'btn primary full',!r.allActions?'disabled':'')}
    ${!r.allActions?button('force-resolve',t('forceResolve'),'btn dark full'):''}</div>
    <p class="small dim">${esc(r.allActions?t('nightDone'):t('stillWaiting'))}</p></div>
    <aside class="glass panel"><div class="content-header"><h3>${esc(t('fullRoster'))}</h3><span class="pill">${esc(t('secretRole'))}</span></div>
    ${ledger()}</aside></div>${historyPanel()}</main>`;
  }
  function outcomeBox() {
    const result=state.room.nightResult;
    if (!result) return '';
    let message, css='';
    if (result.tie) message=t('mafiaTie');
    else if (result.saved) { message=t('saved');css='success'; }
    else if (result.deadId) { message=`${nameById(result.deadId)} ${t('killed')}`;css='alert'; }
    else message=t('noKill');
    const detective = result.investigation;
    return `<div class="summary-box ${css}"><strong>${esc(t('nightOutcome'))}</strong><p>${esc(message)}</p></div>
      ${detective?`<div class="summary-box"><strong>◈ ${esc(t('investigated'))}: ${esc(nameById(detective.targetId))}</strong><p>${esc(detective.mafia?t('isMafia'):t('notMafia'))}</p></div>`:''}`;
  }
  function historyPanel() {
    const h = state.room.history||[];
    return `<section class="glass panel section-gap"><h3>${esc(t('publicEvents'))}</h3>
      ${h.length?`<ul class="history">${[...h].reverse().map(x=>`<li><span class="dot">${esc(t('round'))} ${x.round}</span><span>${esc(x.text)}</span></li>`).join('')}</ul>`:`<p class="small">${esc(t('noEvents'))}</p>`}
    </section>`;
  }
  function investigationNotice() {
    const i=state.room.investigation;
    if (!i) return '';
    return `<div class="summary-box"><strong>◈ ${esc(t('revealResult'))}: ${esc(nameById(i.targetId))}</strong><p class="${i.mafia?'danger-text':'ok'}">${esc(i.mafia?t('isMafia'):t('notMafia'))}</p></div>`;
  }
  function renderDayPlayer() {
    const r=state.room, me=r.me;
    return `<main class="page shell">${renderIntro()}<div class="columns"><section class="glass panel">
      <div class="content-header"><h3>${esc(t('role'))}</h3><span class="status ${me.alive?'live':'dead'}">${esc(me.alive?t('alive'):t('dead'))}</span></div>
      ${roleCard(me.role)}${investigationNotice()}
      </section><aside class="glass panel center"><div class="empty-icon">☝</div><h3>${esc(t('discussionNow'))}</h3><p>${esc(t('votingInPerson'))}</p>
      <div class="summary-box"><strong>${esc(t('nightOutcome'))}</strong><p>${esc(r.history.filter(h=>h.type==='night').at(-1)?.text||t('noKill'))}</p></div>
      <div class="divider"></div><p class="small">${esc(me.alive?t('stayQuiet'):t('eliminatedDesc'))}</p>
      ${r.phase==='day-complete'?`<div class="notify">${esc(t('nextRoundWaiting'))}</div>`:''}</aside></div>${historyPanel()}</main>`;
  }
  function renderDayNarrator() {
    const r=state.room, after=r.phase==='day-complete', dayMode=r.phase==='day';
    return `<main class="page shell">${renderIntro()}<div class="columns"><section class="glass panel"><h3>${esc(t('nightOutcome'))}</h3>
      ${outcomeBox()}
      <div class="divider"></div><h3>${esc(t('seeAction'))}</h3>${actionLines(r.nightResult?.acts?.map(a=>({id:a.playerId,name:a.playerName,role:a.role,targetId:a.targetId}))||[])}
      <div class="divider"></div><h3>${esc(t('fullRoster'))}</h3>${ledger()}</section>
      <aside class="glass panel"><h3>${esc(dayMode?t('verdict'):t('roundComplete'))}</h3>
        ${dayMode?`<p>${esc(t('verdictDesc'))}</p><div class="notify">☝ ${esc(t('votingInPerson'))}</div>
          <div class="target-list">${r.players.filter(p=>p.alive).map(p=>`<button class="target ${state.selectedTargetId===p.id?'selected':''}" data-act="target" data-id="${p.id}">${avatar(p.name)}<span class="name">${esc(p.name)}</span><span class="dot"></span></button>`).join('')}</div>
          ${button('eliminate',t('voteEliminate'),'btn danger full',!state.selectedTargetId?'disabled':'')}
          <div class="actions-row">${button('skip-eliminate',t('nobodyEliminated'),'btn dark full')}</div>
        `:`<div class="empty-icon">☾</div><p>${esc(t('roundComplete'))}</p>${button('next-night',t('nextNight'),'btn primary full')}`}
      </aside></div>${historyPanel()}</main>`;
  }
  function renderEnd() {
    const r=state.room, isMafia=r.winner==='mafia';
    const roles=r.roles || r.revealedRoles || [];
    return `<main class="page shell">${renderIntro()}<section class="glass gameover">
      <div class="role-icon">${isMafia?'♠':'♙'}</div><div class="eyebrow">${esc(t('finished'))}</div>
      <h2 class="${isMafia?'danger-text':'ok'}">${esc(isMafia?t('mafiaWins'):t('townWins'))}</h2><p>${esc(isMafia?t('mafiaWinsText'):t('townWinsText'))}</p>
      ${r.me.narrator?`<div class="actions-row" style="justify-content:center">${button('reset',t('replay'),'btn primary')}</div>`:''}
    </section><div class="glass panel"><h3>${esc(t('revealAll'))}</h3>
    <div class="reveal-roles">${r.players.map(p=>`<div class="ledger-line">${avatar(p.name)}<span class="grow">${esc(p.name)}</span>${label(roles.find(x=>x.id===p.id)?.role||'citizen')}</div>`).join('')}</div></div>
    ${historyPanel()}</main>`;
  }
  function render() {
    document.documentElement.lang = state.lang;
    document.documentElement.dir = state.lang==='ar'?'rtl':'ltr';
    let body;
    if (!state.room) body=renderHome();
    else if (state.room.phase==='lobby') body=renderLobby();
    else if (state.room.phase==='ended') body=renderEnd();
    else if (state.room.phase==='night') body=state.room.me.narrator?renderNightNarrator():renderNightPlayer();
    else body=state.room.me.narrator?renderDayNarrator():renderDayPlayer();
    $app.innerHTML=header()+body+footer();
  }
  async function request(route, data={}) {
    const r=await fetch(`/api/${route}`, { method:'POST', headers:{'Content-Type':'application/json'},body:JSON.stringify(data) });
    let result={};
    try { result=await r.json(); } catch {}
    if (!r.ok) throw new Error(result.error||'Something went wrong.');
    return result;
  }
  async function withRoom(route, data={}) {
    if (!state.session) throw new Error(t('sessionExpired'));
    return request(route,{...data,code:state.session.code,token:state.session.token});
  }
  function storeSession(s) {
    state.session=s; localStorage.setItem('mafia_session',JSON.stringify(s));
    state.revealRole=false;state.selectedTargetId=null;
    history.replaceState({},'',`/?room=${s.code}`);
    connect();
  }
  function disconnect() { if (state.source) { state.source.close();state.source=null; } }
  async function connect() {
    disconnect();
    if (!state.session) return;
    const {code,token}=state.session;
    try {
      const r=await fetch(`/api/state?code=${encodeURIComponent(code)}&token=${encodeURIComponent(token)}`,{cache:'no-store'});
      if (!r.ok) throw new Error(t('roomClosed'));
      state.room=await r.json();
      state.connected=true;
      render();
    } catch (e) { localStorage.removeItem('mafia_session');state.session=null;state.room=null;state.connected=false;render();notify(e.message);return; }
    const source=new EventSource(`/api/stream?code=${encodeURIComponent(code)}&token=${encodeURIComponent(token)}`);
    state.source=source;
    source.addEventListener('state',ev=>{
      if (state.source!==source) return;
      const previous=state.room;
      state.room=JSON.parse(ev.data);state.connected=true;
      if (previous && (previous.phase!==state.room.phase || (previous.round===0 && state.room.round===1))) {
        state.selectedTargetId=null;
        if (state.room.phase==='lobby') state.revealRole=false;
      }
      render();
    });
    source.onerror=()=>{state.connected=false; /* Native EventSource automatically reconnects. */};
  }
  async function copyText(txt) {
    try { await navigator.clipboard.writeText(txt);notify(t('copyDone')); }
    catch { window.prompt(t('copyCode'),txt); }
  }
  async function perform(action, el) {
    if (state.busy) return;
    const room=state.room;
    if (action==='lang') return setLang(state.lang==='ar'?'en':'ar');
    if (action==='entry-create') {state.entryMode='create';render();return;}
    if (action==='entry-join') {state.entryMode='join';render();return;}
    if (action==='home') { if (room) {notify(t('leave'));return;} return; }
    if (action==='reveal') {state.revealRole=true;render();return;}
    if (action==='hide') {state.revealRole=false;render();return;}
    if (action==='target') {state.selectedTargetId=el.dataset.id;render();return;}
    if (action==='copy-code') return copyText(room.code);
    if (action==='share-invite') {
      const invite = `${location.origin}/?room=${room.code}`;
      if (/^(localhost|127\.0\.0\.1)$/.test(location.hostname)) return perform('copy-link',el);
      if (navigator.share) {
        try { await navigator.share({ title: 'Mafia Nights', text: `Join my Mafia lobby · ${room.code}`, url: invite }); }
        catch (e) { if (e.name !== 'AbortError') await copyText(invite); }
        return;
      }
      return copyText(invite);
    }
    if (action==='copy-link') {
      if (/^(localhost|127\.0\.0\.1)$/.test(location.hostname)) {
        const host=window.prompt(t('enterIp'),'192.168.1.100');
        if (!host) return;
        const safeHost=host.trim();
        if (!/^(?:\d{1,3}\.){3}\d{1,3}$/.test(safeHost)) return notify(t('localTip'));
        return copyText(`http://${safeHost}:${location.port||'3000'}/?room=${room.code}`);
      }
      return copyText(`${location.origin}/?room=${room.code}`);
    }
    if (action==='leave') {if (!confirm(t('confirmLeave'))) return;disconnect();state.session=null;state.room=null;localStorage.removeItem('mafia_session');history.replaceState({},'','/');state.entryMode='join';render();return;}
    if (action==='mafia-minus' || action==='mafia-plus') {
      const step=action==='mafia-plus'?1:-1;
      state.settings.mafiaCount=Math.max(1,Math.min(room.maxMafia,state.settings.mafiaCount+step));render();return;
    }
    const id=el.dataset.id;
    if (action==='eliminate' && !confirm(t('confirmEliminate'))) return;
    if (action==='skip-eliminate' && !confirm(t('confirmSkip'))) return;
    if (action==='force-resolve' && !confirm(t('forceConfirm'))) return;
    if (action==='reset' && !confirm(t('confirmReset'))) return;
    state.busy=true;
    try {
      switch(action) {
        case 'kick': await withRoom('kick',{playerId:id});break;
        case 'start':await withRoom('start',{settings:state.settings});break;
        case 'submit-action':await withRoom('action',{targetId:state.selectedTargetId||room.me.actionTarget});break;
        case 'resolve':await withRoom('resolve');break;
        case 'force-resolve':await withRoom('resolve',{force:true});break;
        case 'eliminate':await withRoom('eliminate',{targetId:state.selectedTargetId});break;
        case 'skip-eliminate':await withRoom('eliminate',{targetId:null});break;
        case 'next-night':await withRoom('next-night');break;
        case 'reset':await withRoom('reset');break;
      }
      if (['submit-action','start','next-night','reset','resolve','force-resolve','eliminate','skip-eliminate'].includes(action)) state.selectedTargetId=null;
    } catch(e) {notify(e.message);} finally {state.busy=false;}
  }
  document.addEventListener('click',e=>{
    const el=e.target.closest('[data-act]');
    if (!el)return;
    e.preventDefault();
    perform(el.dataset.act,el);
  });
  document.addEventListener('change',e=>{
    const key=e.target.dataset.setting;
    if(key==='doctor'||key==='detective') {state.settings[key]=e.target.checked;render();}
  });
  document.addEventListener('submit',async e=>{
    const form=e.target.closest('form[data-form]');if(!form)return;
    e.preventDefault();if(state.busy)return;
    const data=new FormData(form);
    state.busy=true;
    const submitButton = form.querySelector('button[type=submit]');
    if (submitButton) submitButton.disabled = true;
    try {
      const type=form.dataset.form;
      const payload={name:data.get('name')};
      if(type==='join')payload.code=String(data.get('code')||'').trim().toUpperCase();
      const result=await request(type,payload);
      storeSession(result);
    }catch(err){notify(err.message);}
    finally {state.busy=false; if (submitButton) submitButton.disabled=false; render();}
  });
  setLang(state.lang);
  try { const raw=localStorage.getItem('mafia_session');if(raw){const s=JSON.parse(raw);if(s.code&&s.token){state.session=s;connect();}} } catch {localStorage.removeItem('mafia_session');}
})();
