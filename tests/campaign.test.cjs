/* Drives the same movement/tick/actions as the client; no teleportation or inventory injection. */
const assert=require('node:assert/strict'),G=require('../game-core');let e=new G.Engine(),steps=0,saves=0;const days=[];
function step(input={}){if(e.s.hunger<=33&&e.s.food>0)e.eat();e.tick(.05,input);steps++;assert.ok(!e.s.ended||e.s.won,'Mission alive: '+e.s.log[0]);assert.ok(G.valid(e.s),'Valid state during play')}
function wait(t){for(let i=0;i<Math.ceil(t/.05);i++)step()}
function walk(point){const path=G.route(e.s.room,e.s.player,point);assert.ok(path.length,'Path to '+point.id);for(const p of path){let limit=0;while(G.dist(e.s.player,p)>9&&limit++<400){const dx=p.x-e.s.player.x,dy=p.y-e.s.player.y;step({right:dx>3,left:dx< -3,down:dy>3,up:dy< -3})}assert.ok(limit<400,'Traversable path to '+point.id)}assert.ok(G.dist(e.s.player,point)<12)}
function robotClose(){for(let i=0;i<800&&e.s.robot.room===e.s.room&&G.dist(e.s.robot,e.s.player)>90;i++)step();assert.equal(e.s.robot.room,e.s.room,'Robot in same room');assert.ok(G.dist(e.s.robot,e.s.player)<120,'Robot can follow through door')}
function go(id){const target=G.OBJECTS.find(x=>x.id===id);if(target.room!==e.s.room&&e.s.room!=='surface'){walk(G.OBJECTS.find(x=>x.id===(e.s.room==='base'?'baseExit':'shelterExit')));robotClose();assert.ok(e.changeRoom('surface'))}if(target.room!==e.s.room){walk(G.OBJECTS.find(x=>x.id===(target.room==='base'?'baseDoor':'shelterDoor')));robotClose();assert.ok(e.changeRoom(target.room))}walk(target)}
for(let day=1;day<=7;day++){
 assert.equal(e.s.day,day);e.choosePlan(['reserve','balanced','science'][(day-1)%3]);go('tools');if(!e.s.tools)e.interact();
 // Wait in a safe room through both emergency types before EVA.
 const weather=e.weather();if(weather&&e.s.elapsed<weather.end)wait(weather.end-e.s.elapsed+.1);if(day===3&&e.s.elapsed<70)wait(70-e.s.elapsed+.1);
 if(e.s.food<5){go('foodStore');e.interact()}
 go('charger');robotClose();e.charge();while(e.s.robot.battery<99.99)step();e.charge();assert.equal(e.s.robot.charging,false);
 const repair=e.info().repair;go(repair);for(let i=0;i<62;i++)step({e:true});assert.ok(e.isRepaired(repair),'Repair '+repair);
 for(const id of ['plotA','plotB','plotC'].slice(0,e.info().samples)){go(id);robotClose();e.interact();assert.ok(e.s.sampling,'Sampling '+id);wait(2.1)}
 go('lab');robotClose();e.interact();assert.ok(e.s.scanner,'Scanner started');wait(2);
 const backup=JSON.parse(JSON.stringify({state:e.s,checkpoint:e.checkpoint}));e=new G.Engine(backup.state);e.checkpoint=G.upgrade(backup.checkpoint);saves++;wait(4.1);assert.equal(e.s.analyzedToday,e.info().samples);
 go('bed');assert.ok(e.readySleep(),'All objectives complete');e.sleep();days.push({day,reports:e.s.reports.length,food:e.s.food,stock:e.s.foodStock,power:Math.round(e.s.basePower),hp:Math.round(e.s.hp)});
}
assert.ok(e.s.won&&e.s.ended);assert.equal(e.s.dayRecords.length,7);assert.equal(e.s.repaired.length,7);assert.equal(e.s.reports.length,14);assert.equal(saves,7);assert.ok(e.s.stats.meals>0);assert.ok(e.s.stats.restocked>0);
const result={passed:true,steps,saves,days,finalAssessment:e.assessment(),method:'Seven-day core simulation via WASD-equivalent tick input and interactions; no player teleport, HP reset, battery reset or inventory injection. Does not certify a real browser.'};require('fs').writeFileSync(require('path').join(__dirname,'campaign-results.json'),JSON.stringify(result,null,2));console.log(JSON.stringify(result,null,2));
