function isSackOfSatingFull(nbt) {
    return nbt && nbt.HungerValue && nbt.HungerValue > 0;
}

ItemEvents.tooltip(event => {
    event.addAdvanced("alexscaves:sack_of_sating", (itemStack, isAdvanced, tooltip) => {
        if (!isSackOfSatingFull(itemStack.nbt)) {
            tooltip.add(1, Text.of("Голодный").gray());
        }
    })

    event.addAdvanced("chimes:glass_bells", (itemStack, isAdvanced, tooltip) => {
        const index = tooltip.findIndex(text => text.getString().includes("Customizable"));

        if (index !== -1) {
            tooltip.set(index, Text.of("Не окрашена").gray());
        }
    });
});
