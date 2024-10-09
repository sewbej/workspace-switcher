const St = imports.gi.St;
const Clutter = imports.gi.Clutter;
const Lang = imports.lang;
const Applet = imports.ui.applet;
const Main = imports.ui.main;
const Mainloop = imports.mainloop;
const Meta = imports.gi.Meta;
const PopupMenu = imports.ui.popupMenu;
const SignalManager = imports.misc.signalManager;
const Tooltips = imports.ui.tooltips;
const Settings = imports.ui.settings;
const ModalDialog = imports.ui.modalDialog;
const Pango = imports.gi.Pango;
const MIN_SWITCH_INTERVAL_MS = 220;
class WorkspaceButton {
	constructor(index, applet) {
		this.index = index;
		this.applet = applet;
		this.workspace = global.workspace_manager.get_workspace_by_index(this.index);
		this.workspace_name = Main.getWorkspaceName(index);
		this.actor = null; // defined in subclass
		this.ws_signals = new SignalManager.SignalManager(null);
		this.ws_signals.connect(this.workspace, "window-added", this.update, this);
		this.ws_signals.connect(this.workspace, "window-removed", this.update, this);
		// Connect after Main or else we'll end up with stale names.
		this.ws_signals.connect_after(Main.wmSettings, "changed::workspace-names", this.updateName, this);
	}
	show() {
		this.actor.connect('button-release-event', Lang.bind(this, this.onClicked));
		this.actor.connect('enter-event', Lang.bind(this, this.mouseover));
		this.actor.connect('leave-event', Lang.bind(this, this.mouseleave));
		this._tooltip = new Tooltips.PanelItemTooltip(this, this.workspace_name, this.applet.orientation);
		if (this.index === global.workspace_manager.get_active_workspace_index()) {
			this.activate(true);
		}
	}
	updateName() {
		this.workspace_name = Main.getWorkspaceName(this.index);
		this._tooltip.set_text(this.workspace_name);
	}
	onClicked(actor, event) {
		if (event.get_button() == 1) {
			Main.wm.moveToWorkspace(this.workspace);
		}
		if (event.get_button() == 2) {
			if (!Main.expo.animationInProgress) Main.expo.toggle();
		}
	}
	mouseover(actor, event) {}
	mouseleave(actor, event) {}
	update() {}
	activate(active) {}
	destroy() {
		this.ws_signals.disconnectAllSignals();
		this._tooltip.destroy();
		this.actor.destroy();
	}
}
/*      • • • •      */
class Button1_width1_black extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button1-width1-black',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '●',
			style: 'font-size: 65%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 65%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 65%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 65%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 65%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button1_width2_black extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button1-width2-black',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '●',
			style: 'font-size: 65%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 65%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 65%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 65%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 65%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button1_width3_black extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button1-width3-black',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '●',
			style: 'font-size: 65%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 65%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 65%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 65%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 65%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button1_width4_black extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button1-width4-black',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '●',
			style: 'font-size: 65%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 65%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 65%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 65%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 65%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button1_width1_white extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button1-width1-white',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '●',
			style: 'font-size: 65%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 65%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 65%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 65%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 65%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button1_width2_white extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button1-width2-white',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '●',
			style: 'font-size: 65%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 65%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 65%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 65%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 65%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button1_width3_white extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button1-width3-white',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '●',
			style: 'font-size: 65%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 65%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 65%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 65%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 65%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button1_width4_white extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button1-width4-white',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '●',
			style: 'font-size: 65%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 65%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 65%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 65%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 65%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
/*      ● ● ● ●      */
class Button2_width1_black extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button2-width1-black',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '●',
			style: 'font-size: 120%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 120%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 120%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 120%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 120%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button2_width2_black extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button2-width2-black',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '●',
			style: 'font-size: 120%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 120%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 120%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 120%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 120%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button2_width3_black extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button2-width3-black',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '●',
			style: 'font-size: 120%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 120%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 120%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 120%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 120%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button2_width4_black extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button2-width4-black',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '●',
			style: 'font-size: 120%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 120%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 120%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 120%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 120%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button2_width1_white extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button2-width1-white',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '●',
			style: 'font-size: 120%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 120%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 120%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 120%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 120%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button2_width2_white extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button2-width2-white',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '●',
			style: 'font-size: 120%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 120%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 120%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 120%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 120%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button2_width3_white extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button2-width3-white',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '●',
			style: 'font-size: 120%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 120%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 120%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 120%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 120%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button2_width4_white extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button2-width4-white',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '●',
			style: 'font-size: 120%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 120%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 120%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 120%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 120%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
/*      ●  •  •  •      */
class Button3_width1_black extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button3-width1-black',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '●',
			style: 'font-size: 60%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 60%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 100%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 60%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button3_width2_black extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button3-width2-black',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '●',
			style: 'font-size: 60%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 60%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 100%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 60%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button3_width3_black extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button3-width3-black',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '●',
			style: 'font-size: 60%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 60%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 100%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 60%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button3_width4_black extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button3-width4-black',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '●',
			style: 'font-size: 60%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 60%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 100%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 60%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button3_width1_white extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button3-width1-white',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '●',
			style: 'font-size: 60%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 60%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 100%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 60%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button3_width2_white extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button3-width2-white',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '●',
			style: 'font-size: 60%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 60%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 100%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 60%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button3_width3_white extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button3-width3-white',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '●',
			style: 'font-size: 60%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 60%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 100%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 60%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button3_width4_white extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button3-width4-white',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '●',
			style: 'font-size: 60%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 60%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 100%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 60%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
/*      ●  🞆  🞆  🞆      */
class Button4_width1_black extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button4-width1-black',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '○',
			style: 'font-size: 80%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '🞊',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '○',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '○',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button4_width2_black extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button4-width2-black',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '○',
			style: 'font-size: 80%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '🞊',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '○',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '○',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button4_width3_black extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button4-width3-black',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '○',
			style: 'font-size: 80%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '🞊',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '○',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '○',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button4_width4_black extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button4-width4-black',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '○',
			style: 'font-size: 80%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '🞊',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '○',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '○',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button4_width1_white extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button4-width1-white',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '○',
			style: 'font-size: 80%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '🞊',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '○',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '○',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button4_width2_white extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button4-width2-white',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '○',
			style: 'font-size: 80%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '🞊',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '○',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '○',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button4_width3_white extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button4-width3-white',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '○',
			style: 'font-size: 80%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '🞊',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '○',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '○',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button4_width4_white extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button4-width4-white',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '○',
			style: 'font-size: 80%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '🞊',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '○',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '●',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '○',
				style: 'font-size: 80%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
/*      ⦿ ○ ○ ○      */
class Button5_width1_black extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button5-width1-black',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '○',
			style: 'font-size: 110%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '☉',
				style: 'font-size: 110%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '○',
				style: 'font-size: 110%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '🞊',
				style: 'font-size: 110%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '○',
				style: 'font-size: 110%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button5_width2_black extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button5-width2-black',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '○',
			style: 'font-size: 110%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '☉',
				style: 'font-size: 110%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '○',
				style: 'font-size: 110%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '🞊',
				style: 'font-size: 110%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '○',
				style: 'font-size: 110%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button5_width3_black extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button5-width3-black',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '○',
			style: 'font-size: 110%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '☉',
				style: 'font-size: 110%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '○',
				style: 'font-size: 110%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '🞊',
				style: 'font-size: 110%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '○',
				style: 'font-size: 110%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button5_width4_black extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button5-width4-black',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '○',
			style: 'font-size: 110%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '☉',
				style: 'font-size: 110%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '○',
				style: 'font-size: 110%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '🞊',
				style: 'font-size: 110%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '○',
				style: 'font-size: 110%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button5_width1_white extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button5-width1-white',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '○',
			style: 'font-size: 110%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '☉',
				style: 'font-size: 110%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '○',
				style: 'font-size: 110%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '🞊',
				style: 'font-size: 110%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '○',
				style: 'font-size: 110%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button5_width2_white extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button5-width2-white',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '○',
			style: 'font-size: 110%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '☉',
				style: 'font-size: 110%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '○',
				style: 'font-size: 110%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '🞊',
				style: 'font-size: 110%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '○',
				style: 'font-size: 110%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button5_width3_white extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button5-width3-white',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '○',
			style: 'font-size: 110%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '☉',
				style: 'font-size: 110%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '○',
				style: 'font-size: 110%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '🞊',
				style: 'font-size: 110%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '○',
				style: 'font-size: 110%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button5_width4_white extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button5-width4-white',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: '○',
			style: 'font-size: 110%;'
		});
		this.actor.set_child(dot);
		this.update();
	}
	mouseover() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '☉',
				style: 'font-size: 110%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	mouseleave() {
		if (this.index === global.workspace_manager.get_active_workspace_index()) return;
		{
			let dot = new St.Label({
				text: '○',
				style: 'font-size: 110%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '🞊',
				style: 'font-size: 110%;'
			});
			this.actor.set_child(dot);
			this.update();
		} else {
			this.actor.remove_style_pseudo_class('selected');
			let dot = new St.Label({
				text: '○',
				style: 'font-size: 110%;'
			});
			this.actor.set_child(dot);
			this.update();
		}
	}
}
class Button99 extends WorkspaceButton {
	constructor(index, applet) {
		super(index, applet);
		this.actor = new St.Button({
			name: 'workspaceButton',
			style_class: 'sewbej-button',
			reactive: applet._draggable.inhibit
		});
		if (applet.orientation == St.Side.TOP || applet.orientation == St.Side.BOTTOM) {
			this.actor.set_height("10");
		} else {
			this.actor.set_width("10");
			this.actor.add_style_class_name('vertical');
		}
		let dot = new St.Label({
			text: 'ᳱ'
		});
		this.actor.set_child(dot);
		this.update();
	}
	activate(active) {
		if (active) {
			this.actor.add_style_pseudo_class('selected');
		} else {
			this.actor.remove_style_pseudo_class('selected');
			this.update();
		}
	}
}
class CinnamonWorkspaceSwitcher extends Applet.Applet {
	constructor(metadata, orientation, panel_height, instance_id) {
		super(orientation, panel_height, instance_id);
		this.setAllowedLayout(Applet.AllowedLayout.BOTH);
		this.orientation = orientation;
		this.signals = new SignalManager.SignalManager(null);
		this.buttons = [];
		this._last_switch = 0;
		this._last_switch_direction = 0;
		this.createButtonsQueued = false;
		this._focusWindow = null;
		if (global.display.focus_window) this._focusWindow = global.display.focus_window;
		this.settings = new Settings.AppletSettings(this, metadata.uuid, instance_id);
		this.settings.bind("display-type", "display_type", this.queueCreateButtons);
		this.settings.bind("display-size", "display_size", this.queueCreateButtons);
		this.settings.bind("display-color", "display_color", this.queueCreateButtons);
		this.settings.bind("display-width", "display_width", this.queueCreateButtons);
		this.settings.bind("display-shadow", "display_shadow", this.queueCreateButtons);
		this.settings.bind("display-background", "display_bg", this.queueCreateButtons);
		this.settings.bind("background-color", "bg_color", this.queueCreateButtons);
		this.settings.bind("activate-on-hover", "_hover_activates");
		this.settings.bind("scroll-behavior", "scroll_behavior");
		this.actor.connect('scroll-event', this.hook.bind(this));
		this.actor.connect('enter-event', Lang.bind(this, this._onEntered));
		this.signals.connect(Main.layoutManager, 'monitors-changed', this.onWorkspacesUpdated, this);
		this.queueCreateButtons();
		global.workspace_manager.connect('notify::n-workspaces', () => {
			this.onWorkspacesUpdated()
		});
		global.workspace_manager.connect('workspaces-reordered', () => {
			this.onWorkspacesUpdated()
		});
		global.window_manager.connect('switch-workspace', this._onWorkspaceChanged.bind(this));
		global.settings.connect('changed::panel-edit-mode', Lang.bind(this, this.on_panel_edit_mode_changed));
		let expoMenuItem = new PopupMenu.PopupIconMenuItem(_("Manage workspaces (Expo)"), "view-grid-symbolic", St.IconType.SYMBOLIC);
		expoMenuItem.connect('activate', Lang.bind(this, function() {
			if (!Main.expo.animationInProgress) Main.expo.toggle();
		}));
		this._applet_context_menu.addMenuItem(expoMenuItem);
		let addWorkspaceMenuItem = new PopupMenu.PopupIconMenuItem(_("Add a new workspace"), "list-add", St.IconType.SYMBOLIC);
		addWorkspaceMenuItem.connect('activate', Lang.bind(this, function() {
			Main._addWorkspace();
		}));
		this._applet_context_menu.addMenuItem(addWorkspaceMenuItem);
		this.removeWorkspaceMenuItem = new PopupMenu.PopupIconMenuItem(_("Remove the current workspace"), "list-remove", St.IconType.SYMBOLIC);
		this.removeWorkspaceMenuItem.connect('activate', Lang.bind(this, function() {
			this.removeWorkspace();
		}));
		this._applet_context_menu.addMenuItem(this.removeWorkspaceMenuItem);
		this.removeWorkspaceMenuItem.setSensitive(global.workspace_manager.n_workspaces > 1);
	}
	_onEntered(event) {
		if (global.settings.get_boolean("panel-edit-mode")) return;
		if (this._hover_activates == "hover")
			if (!Main.expo.animationInProgress) Main.expo.toggle();
	}
	onWorkspacesUpdated() {
		this.removeWorkspaceMenuItem.setSensitive(global.workspace_manager.n_workspaces > 1);
		this._createButtons();
	}
	removeWorkspace() {
		if (global.workspace_manager.n_workspaces <= 1) {
			return;
		}
		this.workspace_index = global.workspace_manager.get_active_workspace_index();
		let removeAction = Lang.bind(this, function() {
			Main._removeWorkspace(global.workspace_manager.get_active_workspace());
		});
		if (!Main.hasDefaultWorkspaceName(this.workspace_index)) {
			let prompt = _("Are you sure you want to remove workspace \"%s\"?\n\n").format(Main.getWorkspaceName(this.workspace_index));
			let confirm = new ModalDialog.ConfirmDialog(prompt, removeAction);
			confirm.open();
		} else {
			removeAction();
		}
	}
	_onWorkspaceChanged(wm, from, to) {
		this.buttons[from].activate(false);
		this.buttons[to].activate(true);
	}
	on_panel_edit_mode_changed() {
		let reactive = !global.settings.get_boolean('panel-edit-mode');
		for (let i = 0; i < this.buttons.length; ++i) {
			this.buttons[i].actor.reactive = reactive;
		}
	}
	on_orientation_changed(neworientation) {
		this.orientation = neworientation;
		if (this.orientation == St.Side.TOP || this.orientation == St.Side.BOTTOM) this.actor.set_vertical(false);
		else this.actor.set_vertical(true);
		this.queueCreateButtons();
	}
	on_panel_height_changed() {
		this.queueCreateButtons();
	}
	hook(actor, event) {
		if (this.scroll_behavior == "disabled") return;
		let now = (new Date()).getTime();
		let direction = event.get_scroll_direction();
		// Avoid fast scroll directions
		if (direction != 0 && direction != 1) return;
		// Do the switch only after a elapsed time to avoid fast
		// consecutive switches on sensible hardware, like touchpads
		if ((now - this._last_switch) > MIN_SWITCH_INTERVAL_MS || direction !== this._last_switch_direction) {
			// XOR used to determine the effective direction
			if ((direction == 0) == (this.scroll_behavior == "normal")) Main.wm.actionMoveWorkspaceLeft();
			else Main.wm.actionMoveWorkspaceRight();
			this._last_switch = now;
			this._last_switch_direction = direction;
		}
	}
	queueCreateButtons() {
		if (!this.createButtonsQueued) {
			Mainloop.idle_add(Lang.bind(this, this._createButtons));
			this.createButtonsQueued = true;
		}
	}
	_createButtons() {
		this.createButtonsQueued = false;
		for (let i = 0; i < this.buttons.length; ++i) {
			this.buttons[i].destroy();
		}
		if (this.display_size == "1" && this.display_bg == true && this.bg_color == "color1" && this.display_shadow == "-1")
        this.actor.set_style_class_name('sewbej-bg1-size1-shadow-1');
		else
		if (this.display_size == "1" && this.display_bg == true && this.bg_color == "color1" && this.display_shadow == "0")
        this.actor.set_style_class_name('sewbej-bg1-size1-shadow0');
		else
		if (this.display_size == "1" && this.display_bg == true && this.bg_color == "color1" && this.display_shadow == "1")
        this.actor.set_style_class_name('sewbej-bg1-size1-shadow1');
		else
		if (this.display_size == "1" && this.display_bg == true && this.bg_color == "color1" && this.display_shadow == "2")
        this.actor.set_style_class_name('sewbej-bg1-size1-shadow2');
		else
		if (this.display_size == "1" && this.display_bg == true && this.bg_color == "color1" && this.display_shadow == "3")
        this.actor.set_style_class_name('sewbej-bg1-size1-shadow3');
		else
		if (this.display_size == "2" && this.display_bg == true && this.bg_color == "color1" && this.display_shadow == "-1")
        this.actor.set_style_class_name('sewbej-bg1-size2-shadow-1');
		else
		if (this.display_size == "2" && this.display_bg == true && this.bg_color == "color1" && this.display_shadow == "0")
        this.actor.set_style_class_name('sewbej-bg1-size2-shadow0');
		else
		if (this.display_size == "2" && this.display_bg == true && this.bg_color == "color1" && this.display_shadow == "1")
        this.actor.set_style_class_name('sewbej-bg1-size2-shadow1');
		else
		if (this.display_size == "2" && this.display_bg == true && this.bg_color == "color1" && this.display_shadow == "2")
        this.actor.set_style_class_name('sewbej-bg1-size2-shadow2');
		else
		if (this.display_size == "2" && this.display_bg == true && this.bg_color == "color1" && this.display_shadow == "3")
        this.actor.set_style_class_name('sewbej-bg1-size2-shadow3');
		else
		if (this.display_size == "3" && this.display_bg == true && this.bg_color == "color1" && this.display_shadow == "-1")
        this.actor.set_style_class_name('sewbej-bg1-size3-shadow-1');
		else
		if (this.display_size == "3" && this.display_bg == true && this.bg_color == "color1" && this.display_shadow == "0")
        this.actor.set_style_class_name('sewbej-bg1-size3-shadow0');
		else
		if (this.display_size == "3" && this.display_bg == true && this.bg_color == "color1" && this.display_shadow == "1")
        this.actor.set_style_class_name('sewbej-bg1-size3-shadow1');
		else
		if (this.display_size == "3" && this.display_bg == true && this.bg_color == "color1" && this.display_shadow == "2")
        this.actor.set_style_class_name('sewbej-bg1-size3-shadow2');
		else
		if (this.display_size == "3" && this.display_bg == true && this.bg_color == "color1" && this.display_shadow == "3")
        this.actor.set_style_class_name('sewbej-bg1-size3-shadow3');
		else
		if (this.display_size == "4" && this.display_bg == true && this.bg_color == "color1" && this.display_shadow == "-1")
        this.actor.set_style_class_name('sewbej-bg1-size4-shadow-1');
		else
		if (this.display_size == "4" && this.display_bg == true && this.bg_color == "color1" && this.display_shadow == "0")
        this.actor.set_style_class_name('sewbej-bg1-size4-shadow0');
		else
		if (this.display_size == "4" && this.display_bg == true && this.bg_color == "color1" && this.display_shadow == "1")
        this.actor.set_style_class_name('sewbej-bg1-size4-shadow1');
		else
		if (this.display_size == "4" && this.display_bg == true && this.bg_color == "color1" && this.display_shadow == "2")
        this.actor.set_style_class_name('sewbej-bg1-size4-shadow2');
		else
		if (this.display_size == "4" && this.display_bg == true && this.bg_color == "color1" && this.display_shadow == "3")
        this.actor.set_style_class_name('sewbej-bg1-size4-shadow3');
		else
		if (this.display_size == "1" && this.display_bg == true && this.bg_color == "color2" && this.display_shadow == "-1")
        this.actor.set_style_class_name('sewbej-bg2-size1-shadow-1');
		else
		if (this.display_size == "1" && this.display_bg == true && this.bg_color == "color2" && this.display_shadow == "0")
        this.actor.set_style_class_name('sewbej-bg2-size1-shadow0');
		else
		if (this.display_size == "1" && this.display_bg == true && this.bg_color == "color2" && this.display_shadow == "1")
        this.actor.set_style_class_name('sewbej-bg2-size1-shadow1');
		else
		if (this.display_size == "1" && this.display_bg == true && this.bg_color == "color2" && this.display_shadow == "2")
        this.actor.set_style_class_name('sewbej-bg2-size1-shadow2');
		else
		if (this.display_size == "1" && this.display_bg == true && this.bg_color == "color2" && this.display_shadow == "3")
        this.actor.set_style_class_name('sewbej-bg2-size1-shadow3');
		else
		if (this.display_size == "2" && this.display_bg == true && this.bg_color == "color2" && this.display_shadow == "-1")
        this.actor.set_style_class_name('sewbej-bg2-size2-shadow-1');
		else
		if (this.display_size == "2" && this.display_bg == true && this.bg_color == "color2" && this.display_shadow == "0")
        this.actor.set_style_class_name('sewbej-bg2-size2-shadow0');
		else
		if (this.display_size == "2" && this.display_bg == true && this.bg_color == "color2" && this.display_shadow == "1")
        this.actor.set_style_class_name('sewbej-bg2-size2-shadow1');
		else
		if (this.display_size == "2" && this.display_bg == true && this.bg_color == "color2" && this.display_shadow == "2")
        this.actor.set_style_class_name('sewbej-bg2-size2-shadow2');
		else
		if (this.display_size == "2" && this.display_bg == true && this.bg_color == "color2" && this.display_shadow == "3")
        this.actor.set_style_class_name('sewbej-bg2-size2-shadow3');
		else
		if (this.display_size == "3" && this.display_bg == true && this.bg_color == "color2" && this.display_shadow == "-1")
        this.actor.set_style_class_name('sewbej-bg2-size3-shadow-1');
		else
		if (this.display_size == "3" && this.display_bg == true && this.bg_color == "color2" && this.display_shadow == "0")
        this.actor.set_style_class_name('sewbej-bg2-size3-shadow0');
		else
		if (this.display_size == "3" && this.display_bg == true && this.bg_color == "color2" && this.display_shadow == "1")
        this.actor.set_style_class_name('sewbej-bg2-size3-shadow1');
		else
		if (this.display_size == "3" && this.display_bg == true && this.bg_color == "color2" && this.display_shadow == "2")
        this.actor.set_style_class_name('sewbej-bg2-size3-shadow2');
		else
		if (this.display_size == "3" && this.display_bg == true && this.bg_color == "color2" && this.display_shadow == "3")
        this.actor.set_style_class_name('sewbej-bg2-size3-shadow3');
		else
		if (this.display_size == "4" && this.display_bg == true && this.bg_color == "color2" && this.display_shadow == "-1")
        this.actor.set_style_class_name('sewbej-bg2-size4-shadow-1');
		else
		if (this.display_size == "4" && this.display_bg == true && this.bg_color == "color2" && this.display_shadow == "0")
        this.actor.set_style_class_name('sewbej-bg2-size4-shadow0');
		else
		if (this.display_size == "4" && this.display_bg == true && this.bg_color == "color2" && this.display_shadow == "1")
        this.actor.set_style_class_name('sewbej-bg2-size4-shadow1');
		else
		if (this.display_size == "4" && this.display_bg == true && this.bg_color == "color2" && this.display_shadow == "2")
        this.actor.set_style_class_name('sewbej-bg2-size4-shadow2');
		else
		if (this.display_size == "4" && this.display_bg == true && this.bg_color == "color2" && this.display_shadow == "3")
        this.actor.set_style_class_name('sewbej-bg2-size4-shadow3');
		else
		if (this.display_size == "1" && this.display_bg == false && this.display_shadow == "-1")
        this.actor.set_style_class_name('sewbej-size1-shadow-1');
		else
		if (this.display_size == "1" && this.display_bg == false && this.display_shadow == "0")
        this.actor.set_style_class_name('sewbej-size1-shadow0');
		else
		if (this.display_size == "1" && this.display_bg == false && this.display_shadow == "1")
        this.actor.set_style_class_name('sewbej-size1-shadow1');
		else
		if (this.display_size == "1" && this.display_bg == false && this.display_shadow == "2")
        this.actor.set_style_class_name('sewbej-size1-shadow2');
		else
		if (this.display_size == "1" && this.display_bg == false && this.display_shadow == "3")
        this.actor.set_style_class_name('sewbej-size1-shadow3');
		else
		if (this.display_size == "2" && this.display_bg == false && this.display_shadow == "-1")
        this.actor.set_style_class_name('sewbej-size2-shadow-1');
		else
		if (this.display_size == "2" && this.display_bg == false && this.display_shadow == "0")
        this.actor.set_style_class_name('sewbej-size2-shadow0');
		else
		if (this.display_size == "2" && this.display_bg == false && this.display_shadow == "1")
        this.actor.set_style_class_name('sewbej-size2-shadow1');
		else
		if (this.display_size == "2" && this.display_bg == false && this.display_shadow == "2")
        this.actor.set_style_class_name('sewbej-size2-shadow2');
		else
		if (this.display_size == "2" && this.display_bg == false && this.display_shadow == "3")
        this.actor.set_style_class_name('sewbej-size2-shadow3');
		else
		if (this.display_size == "3" && this.display_bg == false && this.display_shadow == "-1")
        this.actor.set_style_class_name('sewbej-size3-shadow-1');
		else
		if (this.display_size == "3" && this.display_bg == false && this.display_shadow == "0")
        this.actor.set_style_class_name('sewbej-size3-shadow0');
		else
		if (this.display_size == "3" && this.display_bg == false && this.display_shadow == "1")
        this.actor.set_style_class_name('sewbej-size3-shadow1');
		else
		if (this.display_size == "3" && this.display_bg == false && this.display_shadow == "2")
        this.actor.set_style_class_name('sewbej-size3-shadow2');
		else
		if (this.display_size == "3" && this.display_bg == false && this.display_shadow == "3")
        this.actor.set_style_class_name('sewbej-size3-shadow3');
		else
		if (this.display_size == "4" && this.display_bg == false && this.display_shadow == "-1")
        this.actor.set_style_class_name('sewbej-size4-shadow-1');
		else
		if (this.display_size == "4" && this.display_bg == false && this.display_shadow == "0")
        this.actor.set_style_class_name('sewbej-size4-shadow0');
		else
		if (this.display_size == "4" && this.display_bg == false && this.display_shadow == "1")
        this.actor.set_style_class_name('sewbej-size4-shadow1');
		else
		if (this.display_size == "4" && this.display_bg == false && this.display_shadow == "2")
        this.actor.set_style_class_name('sewbej-size4-shadow2');
		else
		if (this.display_size == "4" && this.display_bg == false && this.display_shadow == "3")
        this.actor.set_style_class_name('sewbej-size4-shadow3');
		else this.actor.set_important(true);
		this.buttons = [];
		for (let i = 0; i < global.workspace_manager.n_workspaces; ++i) {
			if (this.display_type == "button1" && this.display_color == "color1" && this.display_width == "1")
            this.buttons[i] = new Button1_width1_black(i, this);
			else
			if (this.display_type == "button1" && this.display_color == "color1" && this.display_width == "2")
            this.buttons[i] = new Button1_width2_black(i, this);
			else
			if (this.display_type == "button1" && this.display_color == "color1" && this.display_width == "3")
            this.buttons[i] = new Button1_width3_black(i, this);
			else
			if (this.display_type == "button1" && this.display_color == "color1" && this.display_width == "4")
            this.buttons[i] = new Button1_width4_black(i, this);
			else
			if (this.display_type == "button1" && this.display_color == "color2" && this.display_width == "1")
            this.buttons[i] = new Button1_width1_white(i, this);
			else
			if (this.display_type == "button1" && this.display_color == "color2" && this.display_width == "2")
            this.buttons[i] = new Button1_width2_white(i, this);
			else
			if (this.display_type == "button1" && this.display_color == "color2" && this.display_width == "3")
            this.buttons[i] = new Button1_width3_white(i, this);
			else
			if (this.display_type == "button1" && this.display_color == "color2" && this.display_width == "4")
            this.buttons[i] = new Button1_width4_white(i, this);
			else
			if (this.display_type == "button2" && this.display_color == "color1" && this.display_width == "1")
            this.buttons[i] = new Button2_width1_black(i, this);
			else
			if (this.display_type == "button2" && this.display_color == "color1" && this.display_width == "2")
            this.buttons[i] = new Button2_width2_black(i, this);
			else
			if (this.display_type == "button2" && this.display_color == "color1" && this.display_width == "3")
            this.buttons[i] = new Button2_width3_black(i, this);
			else
			if (this.display_type == "button2" && this.display_color == "color1" && this.display_width == "4")
            this.buttons[i] = new Button2_width4_black(i, this);
			else
			if (this.display_type == "button2" && this.display_color == "color2" && this.display_width == "1")
            this.buttons[i] = new Button2_width1_white(i, this);
			else
			if (this.display_type == "button2" && this.display_color == "color2" && this.display_width == "2")
            this.buttons[i] = new Button2_width2_white(i, this);
			else
			if (this.display_type == "button2" && this.display_color == "color2" && this.display_width == "3")
            this.buttons[i] = new Button2_width3_white(i, this);
			else
			if (this.display_type == "button2" && this.display_color == "color2" && this.display_width == "4")
            this.buttons[i] = new Button2_width4_white(i, this);
			else
			if (this.display_type == "button3" && this.display_color == "color1" && this.display_width == "1")
            this.buttons[i] = new Button3_width1_black(i, this);
			else
			if (this.display_type == "button3" && this.display_color == "color1" && this.display_width == "2")
            this.buttons[i] = new Button3_width2_black(i, this);
			else
			if (this.display_type == "button3" && this.display_color == "color1" && this.display_width == "3")
            this.buttons[i] = new Button3_width3_black(i, this);
			else
			if (this.display_type == "button3" && this.display_color == "color1" && this.display_width == "4")
            this.buttons[i] = new Button3_width4_black(i, this);
			else
			if (this.display_type == "button3" && this.display_color == "color2" && this.display_width == "1")
            this.buttons[i] = new Button3_width1_white(i, this);
			else
			if (this.display_type == "button3" && this.display_color == "color2" && this.display_width == "2")
            this.buttons[i] = new Button3_width2_white(i, this);
			else
			if (this.display_type == "button3" && this.display_color == "color2" && this.display_width == "3")
            this.buttons[i] = new Button3_width3_white(i, this);
			else
			if (this.display_type == "button3" && this.display_color == "color2" && this.display_width == "4")
            this.buttons[i] = new Button3_width4_white(i, this);
			else
			if (this.display_type == "button4" && this.display_color == "color1" && this.display_width == "1")
            this.buttons[i] = new Button4_width1_black(i, this);
			else
			if (this.display_type == "button4" && this.display_color == "color1" && this.display_width == "2")
            this.buttons[i] = new Button4_width2_black(i, this);
			else
			if (this.display_type == "button4" && this.display_color == "color1" && this.display_width == "3")
            this.buttons[i] = new Button4_width3_black(i, this);
			else
			if (this.display_type == "button4" && this.display_color == "color1" && this.display_width == "4")
            this.buttons[i] = new Button4_width4_black(i, this);
			else
			if (this.display_type == "button4" && this.display_color == "color2" && this.display_width == "1")
            this.buttons[i] = new Button4_width1_white(i, this);
			else
			if (this.display_type == "button4" && this.display_color == "color2" && this.display_width == "2")
            this.buttons[i] = new Button4_width2_white(i, this);
			else
			if (this.display_type == "button4" && this.display_color == "color2" && this.display_width == "3")
            this.buttons[i] = new Button4_width3_white(i, this);
			else
			if (this.display_type == "button4" && this.display_color == "color2" && this.display_width == "4")
            this.buttons[i] = new Button4_width4_white(i, this);
			else
			if (this.display_type == "button5" && this.display_color == "color1" && this.display_width == "1")
            this.buttons[i] = new Button5_width1_black(i, this);
			else
			if (this.display_type == "button5" && this.display_color == "color1" && this.display_width == "2")
            this.buttons[i] = new Button5_width2_black(i, this);
			else
			if (this.display_type == "button5" && this.display_color == "color1" && this.display_width == "3")
            this.buttons[i] = new Button5_width3_black(i, this);
			else
			if (this.display_type == "button5" && this.display_color == "color1" && this.display_width == "4")
            this.buttons[i] = new Button5_width4_black(i, this);
			else
			if (this.display_type == "button5" && this.display_color == "color2" && this.display_width == "1")
            this.buttons[i] = new Button5_width1_white(i, this);
			else
			if (this.display_type == "button5" && this.display_color == "color2" && this.display_width == "2")
            this.buttons[i] = new Button5_width2_white(i, this);
			else
			if (this.display_type == "button5" && this.display_color == "color2" && this.display_width == "3")
            this.buttons[i] = new Button5_width3_white(i, this);
			else
			if (this.display_type == "button5" && this.display_color == "color2" && this.display_width == "4")
            this.buttons[i] = new Button5_width4_white(i, this);
			else this.buttons[i] = new Button99(i, this);
			this.actor.add_actor(this.buttons[i].actor);
			this.buttons[i].show();
		}
	}
	_onFocusChanged() {
		if (global.display.focus_window && this._focusWindow == global.display.focus_window) return;
		this.signals.disconnect("position-changed");
		this.signals.disconnect("size-changed");
		if (!global.display.focus_window) return;
		this._focusWindow = global.display.focus_window;
		this.signals.connect(this._focusWindow, "position-changed", Lang.bind(this, this._onPositionChanged), this);
		this.signals.connect(this._focusWindow, "size-changed", Lang.bind(this, this._onPositionChanged), this);
		this._onPositionChanged();
	}
	_onPositionChanged() {
		let button = this.buttons[global.workspace_manager.get_active_workspace_index()];
		button.update();
	}
	on_applet_removed_from_panel() {
		this.signals.disconnectAllSignals();
	}
}

function main(metadata, orientation, panel_height, instance_id) {
	return new CinnamonWorkspaceSwitcher(metadata, orientation, panel_height, instance_id);
}
