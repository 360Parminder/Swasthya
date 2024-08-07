package com.Swasthya

import android.appwidget.AppWidgetManager
import android.content.ComponentName
import android.content.Context
import android.widget.RemoteViews
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Callback

class WidgetModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "WidgetModule"
    }

    @ReactMethod
    fun updateWidget(text: String) {
        val context = reactApplicationContext
        val appWidgetManager = AppWidgetManager.getInstance(context)
        val remoteViews = RemoteViews(context.packageName, R.layout.widget_layout)
        remoteViews.setTextViewText(R.id.widget_text, text)

        val componentName = ComponentName(context, WidgetProvider::class.java)
        appWidgetManager.updateAppWidget(componentName, remoteViews)
    }
}
