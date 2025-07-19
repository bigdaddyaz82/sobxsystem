const rewardBtn = document.getElementById("rewardBtn");
const rewardStatus = document.getElementById("rewardStatus");

function hasClaimedToday() {
  const today = new Date().toDateString();
  return localStorage.getItem("sobx_lastClaim") === today;
}

function claimReward() {
  const today = new Date().toDateString();
  localStorage.setItem("sobx_lastClaim", today);
  rewardStatus.textContent = "✅ Reward claimed! Check your SOB-X wallet soon.";
}

rewardBtn.addEventListener("click", () => {
  if (hasClaimedToday()) {
    rewardStatus.textContent = "❌ You've already claimed your reward today.";
  } else {
    claimReward();
  }
});

if (hasClaimedToday()) {
  rewardStatus.textContent = "🎁 Come back tomorrow for more SOB-X!";
}
